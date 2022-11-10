const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();
// add router in express app
app.use("/", router);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.post("/", (req, res) => {
  console.log(Math.random());
  console.log(req.body);
  res.end("yes");
});

app.listen(3001, () => {
  console.log("Started on PORT 3001s");
});
