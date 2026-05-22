import express from "express";
import cors from "cors";

import eventRoute from "./routes/eventRoute.js";
import categoryRoute from "./routes/categoryRoute.js";
import speakerRoute from "./routes/speakerRoute.js";

const app = express();
const port = 3000;

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/events", eventRoute);
app.use("/categories", categoryRoute);
app.use("/speakers", speakerRoute);

// endpoint utama
app.get("/", (req, res) => {
  res.json({
    message: "API berjalan 🚀",
  });
});

// running server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});