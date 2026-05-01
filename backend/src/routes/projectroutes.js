import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import prisma from "../config/db.js";

const router = express.Router();

router.post("/", authMiddleware, async (req, res) => {
  const { name } = req.body;
  const project = await prisma.project.create({
    data: {
      name,
      userId: req.user.userId,
    },
  });
  res.json(project);
});

router.get("/", authMiddleware, async (req, res) => {
  const projects = await prisma.project.findMany({
    where: {
      userId: req.user.userId,
    },
  });
  res.json(projects);
});

export default router;