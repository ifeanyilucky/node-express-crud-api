const express = require("express");
const mongoose = require("mongoose");
const { MONGO_URI } = require("./config");
const postsRoutes = require("./routes/api/posts");

const app = express();

// connect to mongodb
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongodb connected");
  })
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("hello world, we're here");
});

// MIDDLEWARE
app.use(express.json());
app.use("/api/posts", postsRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("App is running on https://localhost:" + PORT);
});
