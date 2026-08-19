import express from "express";
import Memory from "../models/Memory.js";


const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const memory = new Memory(req.body);
    await memory.save();
    res.json(memory);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/", async (req, res) => {
  try {
    const memories = await Memory.find();
    res.json(memories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Memory.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
