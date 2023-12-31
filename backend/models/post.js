import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,  //remove
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    location: String,
    description: String,
    picturePath: String, 
    userProfilePhoto: String, 
   
    likes: {
      type: Map,
      of: Boolean,
    },
   
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;