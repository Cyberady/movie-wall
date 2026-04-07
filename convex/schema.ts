import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  images: defineTable({
    url: v.string(),
    category: v.string(), // "aditya" or "siddhi"
    createdAt: v.number(),
  }),
});