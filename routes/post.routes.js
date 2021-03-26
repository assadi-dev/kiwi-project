const router = require("express").Router();
const postController = require("../controllers/post.controller");
const multer = require("multer");
const upload = multer();

router.get("/", postController.readPost);
router.post("/", upload.single("file"), postController.createPost);
router.put("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);
router.patch("/like-post/:id", postController.likePost);
router.patch("/unlike-post/:id", postController.unlikePost);

//Commentaires
router.patch("/comments-post/:id", postController.commentPost);
router.patch("/edit-comments-post/:id", postController.editCommentPost);
router.patch("/delete-comments-post/:id", postController.deleteCommentPost);

module.exports = router;
