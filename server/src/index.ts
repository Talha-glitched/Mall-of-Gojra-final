import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:5173";

app.use(cors({ origin: CLIENT_ORIGIN, credentials: true }));
app.use(express.json());

// Mongo connection
const mongoUri = process.env.MONGODB_URI;
if (!mongoUri) {
  // eslint-disable-next-line no-console
  console.error("Missing MONGODB_URI in environment.");
  process.exit(1);
}

mongoose
  .connect(mongoUri)
  .then(() => {
    // eslint-disable-next-line no-console
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

// Models
const leadSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    company: { type: String },
    contactNumber: { type: String },
    email: { type: String, required: true },
  },
  { timestamps: true }
);
const Lead = mongoose.model("Lead", leadSchema);

const userSchema = new mongoose.Schema(
  {
    email: { type: String, index: true },
    provider: { type: String, required: true }, // 'anonymous' | 'email'
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);

const otpSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, index: true },
    code: { type: String, required: true },
    expiresAt: { type: Date, required: true, index: true },
  },
  { timestamps: true }
);
const Otp = mongoose.model("Otp", otpSchema);

// Routes
app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/leads", async (req, res) => {
  try {
    const { fullName, company, contactNumber, email } = req.body;
    if (!fullName || !email) return res.status(400).json({ error: "fullName and email are required" });
    const lead = await Lead.create({ fullName, company, contactNumber, email });
    res.status(201).json({ id: lead._id, createdAt: lead.createdAt });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Auth helpers
function signToken(payload: object) {
  const secret = process.env.JWT_SECRET || "dev-secret";
  return jwt.sign(payload, secret, { expiresIn: "7d" });
}

function verifyToken(token?: string) {
  if (!token) return null;
  try {
    const secret = process.env.JWT_SECRET || "dev-secret";
    return jwt.verify(token, secret) as { userId: string };
  } catch {
    return null;
  }
}

app.post("/api/auth/anonymous", async (_req, res) => {
  try {
    const user = await User.create({ provider: "anonymous" });
    const token = signToken({ userId: String(user._id) });
    res.json({ token, user: { id: user._id, provider: user.provider } });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/api/auth/email/request", async (req, res) => {
  const { email } = req.body as { email?: string };
  if (!email) return res.status(400).json({ error: "email is required" });
  const code = String(Math.floor(100000 + Math.random() * 900000));
  const expiresAt = new Date(Date.now() + 10 * 60 * 1000);
  await Otp.deleteMany({ email });
  await Otp.create({ email, code, expiresAt });
  // In a real app, send the code via email. For now, return 204 and log.
  // eslint-disable-next-line no-console
  console.log(`OTP for ${email}: ${code}`);
  res.status(204).send();
});

app.post("/api/auth/email/verify", async (req, res) => {
  const { email, code } = req.body as { email?: string; code?: string };
  if (!email || !code) return res.status(400).json({ error: "email and code are required" });
  const record = await Otp.findOne({ email, code, expiresAt: { $gt: new Date() } });
  if (!record) return res.status(400).json({ error: "Invalid or expired code" });
  await Otp.deleteMany({ email });
  let user = await User.findOne({ email });
  if (!user) user = await User.create({ email, provider: "email" });
  const token = signToken({ userId: String(user._id) });
  res.json({ token, user: { id: user._id, email: user.email, provider: user.provider } });
});

app.get("/api/auth/me", async (req, res) => {
  const header = req.headers.authorization;
  const token = header?.startsWith("Bearer ") ? header.slice(7) : undefined;
  const decoded = verifyToken(token);
  if (!decoded) return res.status(401).json({ error: "Unauthorized" });
  const user = await User.findById(decoded.userId);
  if (!user) return res.status(401).json({ error: "Unauthorized" });
  res.json({ id: user._id, email: user.email, provider: user.provider });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`API listening on http://localhost:${PORT}`);
});


