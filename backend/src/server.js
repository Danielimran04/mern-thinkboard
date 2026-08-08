import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import {connectDB} from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// middleware
app.use(cors({
  origin: "http://localhost:5173", // allow requests from this origin
}));

app.use(express.json());// this middleware will parse the json body
app.use(rateLimiter); // apply the rate limiter middleware to all routes

// untuk nak check berlaku kat mana request tu (our simple custom middleware)
// app.use((req, res, next) => {
//   console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//   next();
// });

app.use("/api/notes", notesRoutes);



connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
