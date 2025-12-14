import { mutation } from "./_generated/server";
import { v } from "convex/values";

// Admin credentials (in production, these should be in environment variables)
const ADMIN_USERNAME = "mogadmin";
const ADMIN_PASSWORD = "mog@admin";

// Mutation to authenticate admin
export const adminLogin = mutation({
  args: {
    username: v.string(),
    password: v.string(),
  },
  handler: async (ctx, args) => {
    // Validate admin credentials
    if (args.username === ADMIN_USERNAME && args.password === ADMIN_PASSWORD) {
      // Return success with admin info
      return {
        success: true,
        isAdmin: true,
        message: "Login successful",
      };
    } else {
      throw new Error("Invalid username or password");
    }
  },
});

