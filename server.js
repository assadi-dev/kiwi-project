const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./config/.env" });
require("./config/dbConnect");
const port = process.env.PORT;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user.routes");
const postRoutes = require("./routes/post.routes");
const { checkUser, requireAuth } = require("./middleware/auth.middleware");
const path = require("path");

const app = express();

const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionId"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("client/build"));

//jwt
app.get("*", checkUser);
app.get("/jwtid", requireAuth, (req, res, next) => {
  res.status(200).send(res.locals.user._id);
});

//Routes

app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);

app.get("/*", (_, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Server Listen
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
