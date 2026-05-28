const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.static('public')); // Serve static files from "public" folder
app.use(express.json());

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'YOUR_EMAIL@gmail.com',
    pass: process.env.EMAIL_PASSWORD || 'YOUR_PASSWORD'
  }
});

// Handle form submission
app.post('/submit-form', upload.single('modelFile'), (req, res) => {
  const { printType, filamentType, filamentColor, printSize, textInput, timeEstimate, email } = req.body;
  const modelPath = req.file ? req.file.path : null;

  const mailOptions = {
    from: process.env.EMAIL_USER || 'YOUR_EMAIL@gmail.com',
    to: 'hayden712@iCloud.com',
    replyTo: email,
    subject: 'New 3D Print Request',
    text: `
      Print Type: ${printType}
      Filament: ${filamentType}, Color: ${filamentColor}
      Size: ${printSize}
      Estimated Time: ${timeEstimate}
      Additional Text: ${textInput || 'N/A'}
      Customer Email: ${email}
    `,
    attachments: modelPath ? [{ path: modelPath }] : []
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.error('Failed to send email:', error);
      res.status(500).json({ success: false, message: 'Failed to send email' });
    } else {
      res.status(200).json({ success: true, message: 'Request received' });
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));