import app from "./index.js";

app.listen(3000, (err) => {
  if (err) {
    console.log("error", err.message);
    return;
  }
  console.log("Listening on port 3000");
});
