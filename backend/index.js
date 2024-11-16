import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import authRoutes from "./routes/User_Routes.js";
const PORT = process.env.PORT || 5000;

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use("/api", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
export default app;
