const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.static('public')); // Serve static files from "public" folder

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'YOUR_EMAIL@gmail.com', // Replace with your email
    pass: 'YOUR_PASSWORD' // Replace with your email password, or use an app password
  }
});

// Handle form submission
app.post('/submit-form', upload.single('modelFile'), (req, res) => {
  const { printType, filamentType, filamentColor, printSize, textInput, timeEstimate } = req.body;
  const modelPath = req.file ? req.file.path : null;

  const mailOptions = {
    from: 'YOUR_EMAIL@gmail.com',
    to: 'hayden712@iCloud.com',
    subject: 'New 3D Print Request',
    text: `
      Print Type: ${printType}
      Filament: ${filamentType}, Color: ${filamentColor}
      Size: ${printSize}
      Estimated Time: ${timeEstimate}
      Additional Text: ${textInput || 'N/A'}
    `,
    attachments: modelPath ? [{ path: modelPath }] : []
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.error('Failed to send email:', error);
      res.status(500).send('Failed to send email');
    } else {
      res.status(200).send('Request received');
    }
  });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));