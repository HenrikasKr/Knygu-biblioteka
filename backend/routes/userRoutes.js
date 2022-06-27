const express = require("express");

const {
  getAllUsersData,
  getUserById,
  updateUserById,
  deleteUserById,
  getUsersByEmail,
} = require("../controllers/userController");

const { addLog, getLogs } = require("../controllers/adminController");

const { addBook, getBook, deleteBook, updateBook } = require("../controllers/bookController");

const router = express.Router();

router.route("/").get(getAllUsersData);
router.route("/logs").get(getLogs);
router.route("/add/log").post(addLog);
router.route("/book").get(getBook);
router.route("/add/book").post(addBook);
router.route("/book/update/:id").patch(updateBook);
router.route("/updateUser").post(updateUserById);
router.route("/userByEmail").post(getUsersByEmail);
router.route("/deleteUser/:id").delete(deleteUserById);
router.route("/:id").get(getUserById);
router.route("/book/delete/:id").delete(deleteBook);


//Admin routes

module.exports = router;