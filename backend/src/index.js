import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute  from "./routes/book.route.js";
import userRoute from "./routes/user.route.js";
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json());

dotenv.config();

const port = process.env.PORT || 5000;
const URI = process.env.MONGODB_URI;

//Connect to mongoDB
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDb Connected");
} catch (error) {
  console.log("Error", error);
}

//defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
