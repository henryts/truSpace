import Post from "../models/Post.js";
import User from "../models/userModel.js";
import asyncErrorHandler from "../errors/asyncErrorHandler.js";

/* CREATE */
export const createPost = asyncErrorHandler(async (req, res) => {
  console.log("in new post");
  const { userId, description } = req.body;
  if (req.file) {
    // Check if req.file exists
    const picturePath = req.file.path;

    try {
      const user = await User.findById(userId);
      const newPost = new Post({
        userId,
        firstName: user.firstName,
        lastName: user.lastName,
        location: user.location,
        description,
        userPicturePath: user.picturePath,
        picturePath: picturePath,
        likes: {},
        comments: [],
      });
      await newPost.save();
      res.status(201).json({ data: userId });
    } catch (error) {
      res.status(500).json({ message: "Error uploading image" });
    }
  } else {
    // Handle the case where no file was uploaded
    res.status(400).json({ message: "No image uploaded" });
  }
});

/* READ */
export const getFeedPosts = async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    const post = await Post.find({ userId });
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE */
export const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const post = await Post.findById(id);
    const isLiked = post.likes.get(userId);

    if (isLiked) {
      post.likes.delete(userId);
    } else {
      post.likes.set(userId, true);
    }

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { likes: post.likes },
      { new: true }
    );

    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
