const UserModel = require("../models/user.model");
const ObjectID = require("mongoose").Types.ObjectId;

// Get All users
module.exports.getAllUsers = async (req, res) => {
  const users = await UserModel.find().select("-password");
  res.status(200).json(users);
};

//Get User Infos

module.exports.userInfo = async (req, res) => {
  //console.log(req.params);
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID  : " + req.params.id + " est inrouvable");
  UserModel.findById(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("ID introuvable : " + err);
  }).select("-password");
};

// UpdateUser

module.exports.updateUser = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID  : " + req.params.id + " est inrouvable");
  try {
    await UserModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          bio: req.body.bio,
        },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true },
      (err, docs) => {
        if (!err) return res.send(docs);
        if (err) return res.status(500).send({ message: err });
      }
    );
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

//DeleteUser

module.exports.deleteUser = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID  : " + req.params.id + " est inrouvable");

  try {
    await UserModel.deleteOne({ _id: req.params.id }).exec();
    res.status(200).json({ message: "cet utilisateur a été supprimé." });
  } catch (error) {
    return res.status(500).send({ message: err });
  }
};

//user follow
module.exports.follow = async (req, res) => {
  if (
    !ObjectID.isValid(req.params.id) ||
    !ObjectID.isValid(req.body.idToFollow)
  )
    return res.status(400).send("ID  : " + req.params.id + " est inrouvable");

  try {
    // add to the follower list ()
    await UserModel.findByIdAndUpdate(
      req.params.id,
      {
        $addToSet: { following: req.body.idToFollow },
      },
      { new: true, upsert: true },
      (err, docs) => {
        if (!err) res.status(201).json(docs);
        else return res.status(400).json(err);
      }
    );
    // add to fpllowing list
    await UserModel.findByIdAndUpdate(
      req.body.idToFollow,
      {
        $addToSet: { followers: req.params.id },
      },
      { new: true, upsert: true },
      (err, docs) => {
        //if (!err) res.status(201).json(docs);
        if (err) return res.status(400).json(err);
      }
    );
  } catch (error) {
    return res.status(500).send({ message: err });
  }
};

//user unfollow
module.exports.unFollow = async (req, res) => {
  if (
    !ObjectID.isValid(req.params.id) ||
    !ObjectID.isValid(req.body.idToUnFollow)
  )
    return res.status(400).send("ID  : " + req.params.id + " est inrouvable");

  try {
    // remove to the follower list ()
    await UserModel.findByIdAndUpdate(
      req.params.id,
      {
        $pull: { following: req.body.idToUnFollow },
      },
      { new: true, upsert: true },
      (err, docs) => {
        if (!err) res.status(200).json(docs);
        else return res.status(400).json(err);
      }
    );
    // remove to following list
    await UserModel.findByIdAndUpdate(
      req.body.idToUnFollow,
      {
        $pull: { followers: req.params.id },
      },
      { new: true, upsert: true },
      (err, docs) => {
        //if (!err) res.status(201).json(docs);
        if (err) return res.status(400).json(err);
      }
    );
  } catch (error) {
    return res.status(500).send({ message: err });
  }
};
