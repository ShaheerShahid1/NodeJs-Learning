const express = require("express");
const app = express();
const port = 8001;
const { connectMongoDB } = require("./connection");
const userRouter = require("./routes/user");
const { logReqRes } = require("./middleware");

// Connect to MongoDB
connectMongoDB("mongodb://127.0.0.1:27017/nodelearning")
.then(console.log("MondoDB is Connected!"));

// Middleware

app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));

// Root Route
app.get("/", (req, res) => {
  return res.send("Hey Welcome to Users dataBase!");
});

// User Routes
app.use("/api/users", userRouter);

// Start Server
app.listen(port, () => console.log(`Server is Started on Port : ${port}`));
