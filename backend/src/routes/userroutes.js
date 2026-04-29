import express from "express";
import authMiddleware from "../middleware/authmiddleware.js";
import prisma from "../config/db.js";

const router = express.Router();

router.get("/profile", authMiddleware, async (req, res) => {
 const user = await prisma.user.findUnique({
    where: {
      id: req.user.userId,
    },
  });

  res.json(user);
});

export default router;