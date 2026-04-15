const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// server used to send send emails
const app = express();
app.use(cors({
  origin: [
    "http://localhost:3000",
    "http://localhost:5173",
    "https://myportfolio.vercel.app",
    process.env.FRONTEND_URL || "http://localhost:3000"
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));
app.use(express.json());

// Main handler for the API
router.post("/contact", async (req, res) => {
  const name = `${req.body.firstName} ${req.body.lastName}`;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;

  const mail = {
    from: name,
    to: process.env.EMAIL_USER || "your-email@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
  });

  // For development without credentials
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.log("Mocking success (Set EMAIL_USER and EMAIL_PASS in environment variables)");
    return res.json({ code: 200, status: "Message Sent (Demo Mode)" });
  }

  try {
    await contactEmail.sendMail(mail);
    res.json({ code: 200, status: "Message Sent" });
  } catch (error) {
    console.error("Error sending mail:", error);
    res.status(500).json({ code: 500, status: "Error sending message", error: error.message });
  }
});

// Newsletter subscription endpoint
router.post("/newsletter", async (req, res) => {
  const email = req.body.email;

  if (!email) {
    return res.status(400).json({ code: 400, status: "Email is required" });
  }

  const mail = {
    from: process.env.EMAIL_USER || "noreply@portfolio.com",
    to: process.env.EMAIL_USER || "your-email@gmail.com",
    subject: "New Newsletter Subscription",
    html: `<p>New subscriber email: <strong>${email}</strong></p>`,
  };

  const newsletterEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
  });

  // For development without credentials
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.log("Mocking newsletter success (Set EMAIL_USER and EMAIL_PASS in environment variables)");
    return res.json({ code: 200, status: "Subscribed successfully (Demo Mode)" });
  }

  try {
    await newsletterEmail.sendMail(mail);
    res.json({ code: 200, status: "Subscribed successfully" });
  } catch (error) {
    console.error("Error with newsletter subscription:", error);
    res.status(500).json({ code: 500, status: "Error subscribing", error: error.message });
  }
});

app.use("/api", router);

// Only listen locally, Vercel handles the server execution in production
if (process.env.NODE_ENV !== 'production') {
  app.listen(5000, () => console.log("Server Running locally on port 5000"));
}

module.exports = app;

