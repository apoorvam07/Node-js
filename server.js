const express = require("express");
const app = express();
const db = require("./db");

app.get("/", function (req, res) {
  res.send("hi..");
});

// app.get("/maggie", (req, res) => {
//   var it = {
//     name: "apoo",
//   };
//   res.send(it);
// });

app.listen(3000, () => {
  console.log("listening 3000");
});

// var fs = require("fs");
// var os = require("os");
// const notes = require("./notes.js");
// //var _ = require("loadash");

// // var data = ["a", "a", "g"];
// // var filter = _.uniq(data);
// // console.log(filter);

// //fs,os
// var user = os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile("greeting.txt", "HI ", () => {
//   console.log("file is created");
// });

// //export
// console.log(notes);
// console.log(notes.age + 8);

// console.log(notes.addNumber(notes.age, 8));
// //object=>json string:stringify
// //json string=>object:parse
