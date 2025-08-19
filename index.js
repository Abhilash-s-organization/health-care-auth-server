import { DB } from "./connect.js";
import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200);
  res.send("Hello there 👀");
});

app.listen(3000, (err) => {
  if (err) {
    console.log("error", err.message);
    return;
  }
  console.log("Listening on port 3000");
});
