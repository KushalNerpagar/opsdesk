import express from "express";
import authRoutes from "./src/routes/authroutes.js";
import userRoutes from "./src/routes/userroutes.js";
import adminRoutes from ".src/routes/adminRoutes.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("opsdesk api running");
});

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);

app.listen(5000, () => {
    console.log("server running on port 5000 sucessfully");
})