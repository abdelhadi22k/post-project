

import Post from "../models/post.js";
import express from "express";
import expressAsyncHandler from "express-async-handler";

const route = express.Router();

route.get("/", async (req, res) => {
  const post = await Post.find();
  res.send(post);
}); 
 


route.get("/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (post) {
    res.send(post);
  } else {
    res.status(404).send({ message: "post Not Found" });
  }
});

route.post("/addpost", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    imgUrl: req.body.imgUrl,
    detels: req.body.detels,

  });

  await post.save();
  res.send(post);
});

route.put("/:id", async (req, res) => {
  const post = await Post.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      imgUrl: req.body.imgUrl,
      detels: req.body.detels,
    },
    { new: true }
  );
  if (!post) {
    return res.status(404).send(`we dont have her this food`);
  }
  res.send(post);
});

route.delete("/:id", async (req, res) => {
  const post = await Post.findByIdAndRemove(req.params.id);

  if (!post) {
    return res.status(404).send(`we dont have her this food `);
  }
  res.send(post);
});

export default route;
