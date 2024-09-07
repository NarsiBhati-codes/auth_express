const express = require("express");

const app = express();
app.use(express.json());

let users = [];

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(users);

  if (users.find((user) => user.username === username)) {
    res.status(400).json({ message: "user already exist" });
  } else {
    users.push({
      username,
      password,
    });
    res.status(200).json({ message: "You are signup" });
  }
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const token = "jshfhsfshfjsfjshfjsjfsjfhjshfs";

  let userFound = false;
  users = users.map((user) => {
    if (user.username === username && user.password === password) {
      userFound = true;
      return { ...user, token };
    }
    return user;
  });

  if (userFound) {
    res.status(200).json({
      message: "you are signin",
      token,
    });
  } else {
    res.status(400).json({
      message: "not found",
    });
  }
});
app.listen(3000, () => {
  console.log(users);
});
