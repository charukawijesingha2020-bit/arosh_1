import mongoose from "mongoose";

const memorySchema = new mongoose.Schema({
  title: String,
  image: String,
  quote: String,
  date: String,
});

export default mongoose.model("Memory", memorySchema);
