const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const userController = require("../controllers/user.controller");
const uploadController = require("../controllers/uploads.controller");
const multer = require("multer");
const upload = multer();

//Authentification
router.post("/register", authController.signUp);
router.post("/login", authController.signIn);
router.get("/logout", authController.logout);

// user database
router.get("/", userController.getAllUsers);
router.get("/:id", userController.userInfo);

// user update
router.put("/:id", userController.updateUser);
// user delete
router.delete("/:id", userController.deleteUser);

//user follow and unfollow
router.patch("/follow/:id", userController.follow);
router.patch("/unfollow/:id", userController.unFollow);

//  uploads
router.post("/upload", upload.single("file"), uploadController.uploadProfil);

module.exports = router;
