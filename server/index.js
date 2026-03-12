const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
app.use(express.json());

const msgSchema = new mongoose.Schema({
  name: String, email: String, subject: String, message: String,
  createdAt: { type: Date, default: Date.now },
});
const Message = mongoose.model("Message", msgSchema);

mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/tanaya-portfolio")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB error:", err));

app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !message) return res.status(400).json({ error: "Missing fields" });
  try {
    await Message.create({ name, email, subject, message });
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      const t = nodemailer.createTransport({ service: "gmail", auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } });
      await t.sendMail({
        from: `"Portfolio" <${process.env.SMTP_USER}>`, to: "tanayaasalkar@gmail.com",
        subject: `Portfolio contact: ${subject} from ${name}`,
        html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b> ${message}</p>`
      });
    }
    res.json({ success: true });
  } catch (err) { console.error(err); res.status(500).json({ error: "Server error" }); }
});

app.get("/api/health", (_, res) => res.json({ status: "ok" }));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server on port ${PORT}`));
