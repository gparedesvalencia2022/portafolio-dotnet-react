# 🚀 Portfolio - .NET + React Full Stack

## 📖 Overview

This is a modern full-stack portfolio application built using:

- ✅ **ASP.NET Core (.NET 8)** – Backend API
- ✅ **React (Vite)** – Frontend UI
- ✅ **Bootstrap** – Responsive design
- ✅ **REST API architecture**

The application dynamically loads portfolio data from a .NET backend and renders it in a modern React UI.

---

## 🧠 Architecture

The project follows a clean separation between frontend and backend:
React (Client)
↓ fetch("/api/portfolio")
ASP.NET Core API (Server)
↓
JSON Response
↓
React renders UI dynamically

---

## 📂 Project Structure


portafolio-dotnet-react/
│
├── portafolio-dotnet-react.client/   # React frontend
│   ├── src/
│   ├── assets/
│   ├── App.jsx
│   └── package.json
│
├── portafolio-dotnet-react.Server/   # .NET backend
│   ├── Controllers/
│   ├── Models/
│   ├── Program.cs
│   └── appsettings.json
│
├── .gitignore
└── README.md

---

## ⚙️ Features

- ✅ Dynamic content from backend (C# API)
- ✅ Clean architecture using Models and Controllers
- ✅ Responsive UI with Bootstrap
- ✅ Matrix-style UI effects (custom CSS)
- ✅ Animated banner (CSS animations)
- ✅ Multilingual "About" section (EN / FR / ES)

---

## 🔌 API Endpoints

### Portfolio


GET /api/portfolio

Returns:

json
{
  "header": {
    "title": "...",
    "subtitle": "..."
  },
  "technologies": [...],
  "projects": [...],
  "aboutEn": [...],
  "aboutFr": [...],
  "aboutEs": [...]
}


🖥️ Getting Started
1. Clone the repository
Shell:
git clone https://github.com/gparedesvalencia2022/portafolio-dotnet-react

2. Run Backend (.NET)
Shell:
dotnet restoredotnet run

3. Run Frontend (React)
Shell:
cd portafolio-dotnet-react.client npm installnpm run dev

🚧 Development Note
When running locally, the frontend may start before the backend is ready.
To handle this, the React app includes a retry mechanism for API requests.

🎨 UI Highlights

✨ Animated banner with fade + pulse + flicker effects
💚 Matrix-inspired theme (green glow)
📱 Responsive layout
🎯 Clean and modern portfolio design


🔒 .gitignore
This project excludes:
node_modules/
bin/
obj/
.vs/
*.user
appsettings.Development.json


🚀 Future Improvements

Database integration (SQL Server / PostgreSQL)
Authentication system
Admin panel (CRUD projects)
Deployment using Docker + Cloud
CI/CD pipeline


👨‍💻 Author
© 2026 - Portfolio .NET Developer gparedesvalencia

📬 Contact
Feel free to connect via GitHub profile.
