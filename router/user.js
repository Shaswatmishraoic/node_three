const { login, logout, signin } = require("../controller/userController");
const validate = require("../middleware/userMiddleware");

const route = require("express").Router();

route.get("/api/login/:age",login)

route.get("/api/signin/:age",validate,signin)

route.get("/api/logout",logout)

module.exports = route;
