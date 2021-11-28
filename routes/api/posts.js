const express = require("express");
const router = express.Router();

//posts model
const Posts = require("../../models/posts");

// @Routes POST api/posts
router.post("/", async (req, res) => {
  const newPost = new Posts(req.body);

  try {
    const post = await newPost.save();
    if (!post) throw Error("Something went wrong while saving the post");

    res.status(200).json().post;
  } catch {
    res.status(400).json({ msg: error });
  }
});

// GET ALL API DATA
router.get("/", async (req, res) => {
  try {
    const posts = await Posts.find();
    if (!posts) throw Error("Post could not be found");
    res.status("200").json(posts);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

// GET POST BY ID
router.get("/:id", async (req, res) => {
  try {
    // const {id} = req.params;
    const post = await Posts.findById(req.params.id, req.body);
    if (!post) throw Error("Post not found");
    res.send(post);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});
// DELETE DATA
router.delete("/:id", async (req, res) => {
  try {
    const post = await Posts.findByIdAndDelete(req.params.id);
    if (!post) throw Error("Post doesn't exist");
    res.status("200").json({ success: true });
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});
module.exports = router;

// UPDATE DATA
router.patch("/:id", async (req, res) => {
  try {
    post = await Posts.findByIdAndUpdate(req.params.id, req.body);
    if (!post) throw Error("Post doesn't exist");
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});
