function getMessages(req, res) {
  res.send("<ul><li> Hello Nidhi! </li></ul>");
}

function postMessages(req, res) {
  console.log("Updating Messages...");
}

module.exports = {
  getMessages,
  postMessages,
};
