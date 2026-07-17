require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const aiRoutes = require("./routes/ai");
const authRoutes = require("./routes/auth");
const resultRoutes = require("./routes/result");
const testRoutes = require("./routes/test");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/ai", aiRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/results", resultRoutes);
app.use("/api/tests", testRoutes);

app.get("/", (req, res) => {
    res.send("🚀 AptiMind AI Backend is Running...");
});

const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGODB_URI, {
  serverSelectionTimeoutMS: 10000
})
.then(() => {
    console.log("✅ MongoDB Connected Successfully");
})
.catch((err) => {
    console.log("❌ MongoDB Connection Error:", err);
});

app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
