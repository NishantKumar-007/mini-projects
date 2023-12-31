const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  const { p, r, t } = req.query;
  const si = (p * r * t) / 100;
  res.json(si);
});
app.listen(3000, () => {
  console.log("server started on port 3000");
});
