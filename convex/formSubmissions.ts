import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Mutation to submit a form
export const submitForm = mutation({
  args: {
    fullName: v.string(),
    company: v.optional(v.string()),
    contactNumber: v.optional(v.string()),
    email: v.string(),
  },
  handler: async (ctx, args) => {
    const submissionId = await ctx.db.insert("formSubmissions", {
      fullName: args.fullName,
      company: args.company,
      contactNumber: args.contactNumber,
      email: args.email,
      submittedAt: Date.now(),
    });
    return submissionId;
  },
});

// Query to get all form submissions (for admin panel)
export const getAllSubmissions = query({
  handler: async (ctx) => {
    const submissions = await ctx.db
      .query("formSubmissions")
      .withIndex("by_submittedAt")
      .order("desc")
      .collect();
    return submissions;
  },
});

// Query to get submission by email
export const getSubmissionByEmail = query({
  args: {
    email: v.string(),
  },
  handler: async (ctx, args) => {
    const submission = await ctx.db
      .query("formSubmissions")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .order("desc")
      .first();
    return submission;
  },
});

