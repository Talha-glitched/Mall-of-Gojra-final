# Convex Setup Guide

This project uses Convex as the backend for form submissions and admin panel.

## Initial Setup

1. **Install Convex CLI** (if not already installed):
   ```bash
   npm install -g convex
   ```

2. **Initialize Convex** (if not already done):
   ```bash
   npx convex dev --once --configure=new
   ```
   
   This will:
   - Create a Convex account (if you don't have one)
   - Set up a new project
   - Generate the necessary configuration files
   - Create a `.env.local` file with your Convex deployment URL

3. **Get your Convex URL**:
   After running the setup, you'll get a URL like:
   ```
   https://your-project.convex.cloud
   ```
   
   This will be automatically added to `.env.local` as `VITE_CONVEX_URL`.

4. **Start the Convex dev server**:
   ```bash
   npx convex dev
   ```
   
   Keep this running in a separate terminal while developing. It will:
   - Watch for changes in the `convex/` folder
   - Push updates to your Convex deployment
   - Regenerate TypeScript types

## Environment Variables

Create a `.env.local` file in the root directory with:

```
VITE_CONVEX_URL=https://your-project.convex.cloud
```

**Note**: The `.env.local` file is gitignored and should not be committed.

## Project Structure

- `convex/schema.ts` - Database schema definitions
- `convex/formSubmissions.ts` - Convex functions (mutations and queries)
- `convex/_generated/` - Auto-generated TypeScript types (do not edit)

## Functions

### Mutations
- `submitForm` - Saves a form submission to the database

### Queries
- `getAllSubmissions` - Gets all form submissions (for admin panel)
- `getSubmissionByEmail` - Gets a submission by email address

## Admin Panel

Access the admin panel at `/admin`. You must be authenticated to view it.

The admin panel displays:
- All form submissions in a table
- Export to CSV functionality
- Sign out option

## Form Submission Flow

1. User fills out the contact form
2. Form submission is saved to Convex via `submitForm` mutation
3. After successful submission, a download button appears
4. User can download the brochure PDF
5. Submission status is stored in localStorage to persist across page refreshes

## Troubleshooting

If you see errors about missing Convex URL:
1. Make sure `.env.local` exists with `VITE_CONVEX_URL`
2. Restart your Vite dev server after creating/updating `.env.local`
3. Make sure `npx convex dev` is running

If types are not updating:
1. Make sure `npx convex dev` is running
2. Check that your Convex functions are properly deployed
3. Try restarting the Convex dev server

