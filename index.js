var express = require("express");
var app = express();
// app.use(express.static("./"));
var router = express.Router();
var dashboard = require("./dashboard");
var events = require("events");
var eventEmitter = new events.EventEmitter();
var fs = require("fs");
var os = require("os");
var dns = require("dns");
var domain = require("domain");
var child = domain.create();
// app.get("/", function (err, req, res, next) {
//   fs.readFile("/file-does-not-exist", function (err, data) {
//     if (err) {
//       // throw new Error(err);
//       next(err);
//     } else {
//       res.send(data);
//     }
//   });
// });

app.get("/", function (req, res, next) {
  // throw new Error("BROKEN"); // Express will catch this on its own.
  next("err");
});
// console.log("child", child._events.child);
// dns.lookup("xord.com", function onLookup(err, address, family) {
//   console.log("address:", address);
//   dns.reverse(address, function (err, hostnames) {
//     if (err) {
//       console.log(err.stack);
//     }

//     console.log("reverse for " + address + ": " + JSON.stringify(hostnames));
//   });
// });
// let data = fs.readFileSync("data.json");

// var connection = function Connection() {
//   console.log("connecteed");
// };
// eventEmitter.on("success", connection);

// eventEmitter.emit("success");
//   if (err) {
//     console.log("error", err);
//     return;
//   }
//   console.log("check data", data.toString());
// });
// console.log("data===>", data.toString());
// console.log("os", os.hostname());
// console.log("os", os.type());
// console.log("os", os.platform());
// console.log("os", os.arch());
// console.log("os", os.cpus().length);

// router.use("/dashboard", dashboard);
// app.use(router);
// app.get("/", (req, res) => {
//   console.log("check", req.query);
//   //   response = {
//   //     first_name: req.query.first_name,
//   //     last_name: req.query.last_name,
//   //   };
//   //   console.log(response);
//   res.send("hey");
//   //   res.sendFile(__dirname + "/" + "index.html");
// });
// app.get("/check", (req, res) => {
//   console.log("check", req.query);
//   res.send("asd");
// });

app.listen(3001);
