// const express = require("express");

// const app = express();
// const PORT = 3000;

// app.get("/", (req, res) => {
//   res.send({
//     id: 012,
//     name: "Nidhi",
//   });
// });

// app.get("/message", (req, res) => {
//   res.send("<ul><li> Hello Nidhi! </li></ul>");
// });

// app.post("/message", (req, res) => {
//   console.log("Updating Messages...");
// });

// app.listen(PORT, () => {
//   console.log(`Listening the port... ${PORT}`);
// });
// // console.log("HI");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const express = require("express");

// const app = express();
// const PORT = 3000;

// const friends = [
//   {
//     id: 01,
//     name: "Nidhi",
//   },
//   {
//     id: 02,
//     name: "Anup",
//   },
// ];

// app.get("/friends", (req, res) => {
//   res.json(friends);
// });

// app.get("/friends/:arrIndex", (req, res) => {
//   const friendID = Number(req.params.arrIndex);
//   const friend = friends[friendID];
//   if (friend) {
//     res.status(200).json(friend);
//   } else {
//     res.status(404).json({
//       error: "Friend does not Exist",
//     });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Listening to the port ... ${PORT}`);
// });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//MiddleWare && POST Request in express.

// const express = require("express");

// const app = express();
// const PORT = 3000;

// const friends = [
//   {
//     id: 01,
//     name: "Nidhi",
//   },
//   {
//     id: 02,
//     name: "Anup",
//   },
// ];

// app.use((req, res, next) => {
//   const start = Date.now();
//   next();
//   const delta = Date.now() - start;
//   console.log(`${req.method}, ${req.url} ${delta}ms`);
// });

// app.use(express.json());

// app.post("/friends", (req, res) => {
//   if (!req.body.name) {
//     return res.status(404).json({
//       error: "Missing Friend Name",
//     });
//   }

//   const newFriend = {
//     name: req.body.name,
//     id: friends.length,
//   };
//   friends.push(newFriend);
//   res.json(newFriend);
// });

// app.get("/friends", (req, res) => {
//   res.json(friends);
// });

// app.get("/friends/:arrIndex", (req, res) => {
//   const friendID = Number(req.params.arrIndex);
//   const friend = friends[friendID];
//   if (friend) {
//     res.status(200).json(friend);
//   } else {
//     res.status(404).json({
//       error: "Friend does not Exist",
//     });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Listening to the port ... ${PORT}`);
// });

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //MVC - Model View Controller Design

// const express = require("express");

// const messagesController = require("./controllers/message.controller");
// const friendsController = require("./controllers/friends.controller");

// const app = express();
// const PORT = 3000;

// app.use((req, res, next) => {
//   const start = Date.now();
//   next();
//   const delta = Date.now() - start;
//   console.log(`${req.method}, ${req.url} ${delta}ms`);
// });

// app.use(express.json());

// app.post("/friends", friendsController.postFriends);
// app.get("/friends", friendsController.getFriends);
// app.get("/friends/:arrIndex", friendsController.getOneFriend);

// app.get("/message", messagesController.getMessages);
// app.post("/message", messagesController.postMessages);

// app.listen(PORT, () => {
//   console.log(`Listening to the port ... ${PORT}`);
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Express Router

const express = require("express");
const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/message.router");
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method},${req.baseUrl}/${req.url} ${delta}ms`);
});
app.use(express.json());
app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);
app.listen(PORT, () => {
  console.log(`Listening to the port ... ${PORT}`);
});
