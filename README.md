# 3D Printing Business Website

A full-stack web application for managing 3D printing requests. Customers can submit print orders with specifications, and requests are sent via email to the business owner.

## Features

- 📤 Upload 3D model files (STL format) or describe custom designs
- 🎨 Select filament type and color
- 📏 Choose print size with automatic time estimation
- 📧 Automatic email notifications to business owner
- 📱 Responsive design for mobile and desktop
- 🎯 Clean and intuitive user interface

## Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Node.js, Express.js
- **Email**: Nodemailer
- **File Upload**: Multer

## Installation

1. Clone the repository:
```bash
git clone https://github.com/dtrzgfbnyb-collab/3d-printing-bussniess.git
cd 3d-printing-bussniess
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file with your email credentials:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
PORT=3000
```

4. Start the server:
```bash
npm start
```

5. Open your browser and navigate to:
```
http://localhost:3000
```

## Deployment

This application can be deployed to:
- Heroku
- Vercel
- AWS
- GitHub Pages (frontend only)

## Environment Variables

- `EMAIL_USER`: Your Gmail address
- `EMAIL_PASSWORD`: Your Gmail app password
- `PORT`: Server port (default: 3000)

## License

MIT