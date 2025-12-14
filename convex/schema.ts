import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  formSubmissions: defineTable({
    fullName: v.string(),
    company: v.optional(v.string()),
    contactNumber: v.optional(v.string()),
    email: v.string(),
    submittedAt: v.number(),
  })
    .index("by_email", ["email"])
    .index("by_submittedAt", ["submittedAt"]),
});

