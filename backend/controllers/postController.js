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
      console.log({user});
      const newPost = new Post({
        userId,
        firstName: user.firstName,
        lastName: user.lastName,
        location: user.location,
        description,
        userProfilePhoto: user.profilePhoto,
        picturePath: picturePath,
        likes: {},
        comments: [],
      });
      await newPost.save();
      res.status(201).json({ data: newPost });
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
    const post = await Post.find().sort({ createdAt: -1 });
    console.log({post});
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
export const likeUnlikePost = async (req, res) => {
  try {
    const { id } = req.params;
    console.log({id});
    const { userId } = req.body;
    console.log({userId});
    const post = await Post.findById(id);
  
    const isLiked = post.likes.get(userId);
    //console.log(post);
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
    const likeCount = Array.from(post.likes.values()).filter(Boolean).length;
    console.log({likeCount});
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
