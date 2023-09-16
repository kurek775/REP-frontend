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

app.listen(5000, () => {
  console.log(`[server]: Server is running at http://localhost:${5000}`);
});
