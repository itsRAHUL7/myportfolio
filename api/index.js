const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// server used to send send emails
const app = express();
app.use(cors());
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

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error("Error sending mail:", error);
      res.status(500).json({ code: 500, status: "Error sending message", error: error.message });
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});

app.use("/api", router);

// Only listen locally, Vercel handles the server execution in production
if (process.env.NODE_ENV !== 'production') {
  app.listen(5000, () => console.log("Server Running locally on port 5000"));
}

module.exports = app;

