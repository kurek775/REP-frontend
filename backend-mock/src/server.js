const express = require("express");
const cors = require("cors");

const app = express();
app.use(
  cors()
);
app.get("/api/user/:id", (req, res) => {

  res.send({
    id: req.params.id,
    name: "John Doeeee",
    email: "mock@sss",
    password: "123456",
    role: "coach",
    coach_id: null,
  });
});

app.post("/api/user/:id", (req, res) => {
  console.log(req.body);
  res.send({
    result: "success",
  });
});

app.put("/api/user/:id", (req, res) => {
  console.log(req.body);
  res.send({
    result: "success",
  });
});

app.delete("/api/user/:id", (req, res) => {
  console.log(req.body);
  res.send({
    result: "success",
  });
});

app.get("/api/athletes/:coachId", (req, res) => {

  res.send([
    {
      id: req.params.id,
      name: "GOOD BOY",
      email: "mock@sss",
      password: "123456",
      role: "athlete",
      coach_id: req.params.coachId,
    },
    {
      id: req.params.id,
      name: "BAAD PERSON",
      email: "mock@sss",
      password: "123456",
      role: "athlete",
      coach_id: req.params.coachId,
    }
  ]);
});

app.get("/api/athletes/:coachId", (req, res) => {

  res.send([
    {
      id: 1,
      name: "GOOD BOY",
      email: "mock@sss",
      password: "123456",
      role: "athlete",
      coach_id: req.params.coachId,
    },
    {
      id: 2,
      name: "BAAD PERSON",
      email: "mock@sss",
      password: "123456",
      role: "athlete",
      coach_id: req.params.coachId,
    }
  ]);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
