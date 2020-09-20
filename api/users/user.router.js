const { createUser, login, getUserByUserId, getUsers, updateUsers, deleteUser } = require("./user.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
// const cors = require('cors');
// router.use(corse())
router.post('/', createUser);
router.get("/", checkToken, getUsers);
router.get("/:id", checkToken, getUserByUserId);
router.post("/login", login);
router.patch("/", checkToken, updateUsers);
router.delete("/", checkToken, deleteUser);

module.exports = router;
