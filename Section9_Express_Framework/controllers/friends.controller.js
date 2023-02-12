const model = require("../models/friends.model");

function postFriends(req, res) {
  if (!req.body.name) {
    return res.status(404).json({
      error: "Missing Friend Name",
    });
  }

  const newFriend = {
    name: req.body.name,
    id: model.length,
  };
  model.push(newFriend);
  res.json(newFriend);
}

function getFriends(req, res) {
  res.json(model);
}

function getOneFriend(req, res) {
  const friendID = Number(req.params.arrIndex);
  const friend = model[friendID];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: "Friend does not Exist",
    });
  }
}

module.exports = {
  postFriends,
  getFriends,
  getOneFriend,
};
