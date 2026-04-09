# 🚀 Modern Personal Portfolio

A sleek, responsive, and high-performance personal portfolio website built with **React 19** and **Express 5**. Designed for professional presentation and seamless deployment on **Vercel**.

![Portfolio Preview](https://user-images.githubusercontent.com/50160672/174933373-1ba6cadf-1c9a-48c3-aa58-984d0bd62d82.png)

## ✨ Features

- **React 19**: Powered by the latest React features for optimal performance.
- **Serverless Backend**: Integrated Express 5 API for handling contact form submissions via Vercel Serverless Functions.
- **Automated Emails**: Integrated with **Nodemailer** for direct email notifications.
- **Modern UI/UX**: Built with **React-Bootstrap** and **Animate.css** for a polished, interactive experience.
- **Vercel Ready**: Pre-configured with `vercel.json` for hassle-free deployment.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop screens.

## 🛠️ Tech Stack

- **Frontend**: React 19, React-Bootstrap, Animate.css, React-Router 7
- **Backend**: Express 5 (Serverless via Vercel)
- **Email Service**: Nodemailer
- **Styling**: Vanilla CSS, Bootstrap 5

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### 2. Installation
```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to the project directory
cd myportfolio

# Install dependencies
npm install --legacy-peer-deps
```

### 3. Local Development
To run the project locally, you need to start both the frontend and the backend (optional for API testing).

```bash
# Start the React development server
npm start
```

Your app will be available at `http://localhost:3000`.

## 🌐 Deployment on Vercel

This project is optimized for **Vercel**. Follow these steps for a perfect deployment:

1. **Push to GitHub**: Ensure your code is in a GitHub repository.
2. **Import to Vercel**: Connect your repo to Vercel.
3. **Setup Environment Variables**: In Vercel Project Settings, add:
   - `EMAIL_USER`: Your Gmail address (e.g., `you@gmail.com`).
   - `EMAIL_PASS`: Your [Gmail App Password](https://myaccount.google.com/apppasswords).
4. **Deploy**: Vercel will auto-detect the configuration and handle the rest!

## 📂 Project Structure

- `/api`: Contains the serverless backend (`index.js`).
- `/src`: Frontend React components and assets.
- `/public`: Static assets.
- `vercel.json`: Routing and configuration for Vercel.

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
