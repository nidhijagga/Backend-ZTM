const express = require("express");
const messagesController = require("../controllers/message.controller");

const messagesRouter = express.Router();

messagesRouter.get("/", messagesController.getMessages);
messagesRouter.post("/", messagesController.postMessages);

module.exports = messagesRouter;
