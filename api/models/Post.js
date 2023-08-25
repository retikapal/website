const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },

    likes:[{type:ObjectId,ref:"User"}],
    username: {
      type: String,
      required: true,
    },

    /*likes: {
      type: Array,
      default: [],
    },*/

    categories: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
