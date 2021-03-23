const PostModel = require("../models/post.model");
const UserModel = require("../models/user.model");
const ObjectID = require("mongoose").Types.ObjectId;

module.exports.readPost = (req, res) => {
  PostModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Erreur de récuperation des données :" + err);
  });
};

module.exports.createPost = async (req, res) => {
  const newPost = new PostModel({
    posterId: req.body.posterId,
    message: req.body.message,
    video: req.body.video,
    likers: [],
    comment: [],
  });

  try {
    const post = await newPost.save();
    return res.status(201).json(post);
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};

module.exports.updatePost = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID  : " + req.params.id + " est inrouvable");

  const updatedRecord = {
    message: req.body.message,
  };
  console.log(req.parms);
  PostModel.findByIdAndUpdate(
    req.params.id,
    { $set: updatedRecord },
    { new: true },
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log("Update error : " + err);
    }
  );
};

module.exports.deletePost = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID  : " + req.params.id + " est inrouvable");

  PostModel.findByIdAndDelete(req.params.id, (err, docs) => {
    if (!err) res.send("Post Supprimé");
    else console.log("Delete errors : " + err);
  });
};
