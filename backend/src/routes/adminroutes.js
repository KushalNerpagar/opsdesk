import express from "express";
import authMiddleware from "../middleware/authmiddleware.js";
import allowRoles from "../middleware/rolemiddleware.js";

const router = express.Router();

router.get(
  "/dashboard",
  authMiddleware,
  allowRoles("admin"),
  (req, res) => {
    res.json({ message: "Welcome Admin !" });
  }
);

export default router;