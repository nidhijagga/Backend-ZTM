const express = require("express");
const friendsController = require("../controllers/friends.controller");
const friendsRouter = express.Router();
friendsRouter.use((req, res, next) => {
  console.log("IP Address: " + req.ip);
  next();
});
friendsRouter.post("/", friendsController.postFriends);
friendsRouter.get("/", friendsController.getFriends);
friendsRouter.get("/:arrIndex", friendsController.getOneFriend);

module.exports = friendsRouter;
