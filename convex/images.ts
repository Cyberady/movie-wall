import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const addImage = mutation({
  args: {
    url: v.string(),
    category: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("images", {
      url: args.url,
      category: args.category,
      createdAt: Date.now(),
    });
  },
});

export const getImages = query({
  args: { category: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("images")
      .filter((q) => q.eq(q.field("category"), args.category))
      .order("desc")
      .collect();
  },
});

export const deleteImage = mutation({
  args: { id: v.id("images") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});