# 💻 GPV Portfolio – Full Stack Application

A modern and dynamic professional portfolio built with **React (frontend)** and **.NET Core API (backend)**, designed to showcase projects, skills, and interactive UI effects.

---

## 🚀 Tech Stack

### Frontend
- React + Vite
- JavaScript (ES6+)
- Custom Hooks Architecture
- CSS (modular + responsive design)
- Canvas animations & UI effects

### Backend
- .NET Core (Web API)
- RESTful architecture
- JSON-based content delivery

### Architecture
- Separation of concerns (UI / Hooks / Effects)
- Reusable custom hooks (`useTypingEffect`, `useMatrixRainEffect`, etc.)
- Effects layer for DOM-based animations
- API-driven content (portfolio data)

---

## 🎯 Features

- 💻 Interactive terminal UI (CLI simulation)
- 🌧 Matrix-style background animations
- 🖱 Mouse-based visual effects
- 🎨 Responsive design (desktop + mobile)
- 🌍 Multi-language support (EN / FR / ES)
- ⚡ Smooth animations and transitions
- 🔗 Clickable GitHub integration

---

## 📂 Project Structure
src/
├── components/
├── hooks/
├── effects/
├── services/
├── pages/
└── styles/

---

## ⚙️ Running the Project Locally

---

### ✅ 1. Backend (.NET Core API)

Navigate to the backend project folder:

bash
cd portafolio-dotnet-react

Run the API:
dotnet run

The API will start on:
https://localhost:5001 (or similar)

✅ 2. Frontend (React + Vite)
Navigate to the client folder:

cd portafolio-dotnet-react.client
npm install

npm run dev

http://localhost:5173

🏗️ Build / Publish (Frontend)
To generate production assets:

npm run build

This will output optimized files in:
/dist

📦 Full Application Publish (.NET + React)
To publish the entire application:
dotnet publish -c Release
👉 The React build will be included if configured in the project.

🐳 Deployment Notes

Docker is used for deployment (Render compatible)
Node.js is installed during build stage
Vite builds frontend assets before publishing backend


⚠️ Important Notes

File naming is case-sensitive in production (Linux)
Always ensure imports match file names exactly
Use git mv for renaming files (case changes)


🌐 Live Demo
👉 Add your deployed URL here

👨‍💻 Author
GPV (Guillermo Paredes)
Full Stack Developer

🔗 Contact / GitHub
👉 https://github.com/gparedesvalencia2022

⭐ Final Note
This project demonstrates:
https://gparedesdotnet.onrender.com/

## ☁️ Deployment (Render)

This application is deployed using **Render**, a cloud platform that simplifies full-stack deployments.

- 🐳 Uses a **Dockerfile-based deployment**
- 🔗 Connected directly to the GitHub repository
- 🚀 Supports **automatic deployment (CI/CD pipeline)** on every push
- 💸 Free-tier hosting available for personal projects

Every time a change is pushed to the repository (e.g. `git push`), Render automatically:

1. Pulls the latest code from GitHub
2. Builds the application (frontend + backend)
3. Deploys the new version live

👉 Live application:  
https://gparedesdotnet.onrender.com

Modern frontend architecture (React Hooks + Effects pattern)
Clean separation of concerns
Integration with backend APIs
Production-ready deployment setup
