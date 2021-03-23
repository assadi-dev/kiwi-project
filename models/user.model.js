const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    pseudo: {
      type: String,
      required: true,
      minLenght: 3,
      maxLenght: 55,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      validate: [isEmail],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      max: 1024,
      minlength: 6,
    },
    picture: {
      type: String,
      default: "./uploads/profil/random-user.png",
    },
    bio: {
      type: String,
      max: 1024,
    },
    followers: {
      type: [String],
    },
    following: {
      type: [String],
    },
    likes: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

// Execute les fonctions avant de sauvegarder dans  la base de donées

//cryptage de mot de passe
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Décryptage du mot de passe lors de l'authentification
userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect email");
};

const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;
