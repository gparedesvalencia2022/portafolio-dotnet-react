# 🚀 Portfolio - .NET + React Full Stack

### ✅ Step 1 — Remove Production Settings

In `portafolio-dotnet-react.Server.csproj`, remove the following lines:


#XML<SpaRoot>..\portafolio-dotnet-react.client</SpaRoot> 
 #XML<BuildServerSide >false</BuildServerSide> 

### ✅ Step 2 — Add back the following section:
#<ItemGroup>
  #<ProjectReference Include="..\portafolio-dotnet-react.client\portfolio-dotnet-react.client.esproj">
    #<ReferenceOutputAssembly>false</ReferenceOutputAssembly>
  #</ProjectReference>
#</ItemGroup>

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


## 🚀 Deployment on Render (Production)

This project uses Docker to deploy a full-stack application (.NET + React) on Render.

---

## ⚠️ Step 1 — Prepare the Project for Production

Before deploying, you must adjust the `.csproj` configuration.

### ✅ Remove development-only settings

In `portafolio-dotnet-react.Server.csproj`, remove:


<SpaRoot>..\portafolio-dotnet-react.client</SpaRoot>
<SpaProxyLaunchCommand>npm run dev</SpaProxyLaunchCommand>
<SpaProxyServerUrl>https://localhost:63293</SpaProxyServerUrl>

<ItemGroup>
  <ProjectReference Include="..\portafolio-dotnet-react.client\portfolio-dotnet-react.client.esproj">
    <ReferenceOutputAssembly>false</ReferenceOutputAssembly>
  </ProjectReference>
</ItemGroup>

✅ Remove the client project reference


<ItemGroup>
  <ProjectReference Include="..\portafolio-dotnet-react.client\portfolio-dotnet-react.client.esproj">
    <ReferenceOutputAssembly>false</ReferenceOutputAssembly>
  </ProjectReference>
</ItemGroup>

✅ Add production setting
Ensure you have:
XML<BuildServerSide>false</BuildServerSide>

git add .
git commit -m "prepare for production deployment"
git push

🌐 Step 3 — Create Web Service on Render


Go to:
👉 https://render.com


Sign in with your GitHub account


Click:
New → Web Service



Select your repository:
portafolio-dotnet-react




⚙️ Step 4 — Configure Service
Fill the form as follows:


Name:
portfolio-dotnet-react



Runtime:
Docker



Branch:
master (or main)



Instance Type:
Free ✅



Root Directory:
(leave empty)



Build Command:
(leave empty)



Start Command:
(leave empty)




🚀 Step 5 — Deploy
Click:
Deploy Web Service


⏳ Step 6 — Build Process
Render will:

Clone your repository
Build the Docker image
Install Node.js
Build the React frontend
Publish the .NET backend
Start the application


✅ Step 7 — Access Your App
Once deployment completes, you will receive a public URL:
https://your-app-name.onrender.com


⚠️ Important Notes

The free plan may take a few minutes to start (cold start)
First build may take 5–10 minutes
Docker cache warnings can be ignored


🧠 Development vs Production
ModeBehaviorDevelopmentReact + .NET run separately

Production.NET serves the full application
🚀 Future Improvements

Database integration (SQL Server / PostgreSQL)
Authentication system
Admin panel (CRUD projects)
Deployment using Docker + Cloud
CI/CD pipeline


## 🛠️ Development Mode (Visual Studio - F5)

If you want to restore the original development experience using Visual Studio (F5),
you need to undo the production changes and re-enable the client integration.

---

👨‍💻 Author
© 2026 - Portfolio .NET Developer gparedesvalencia

📬 Contact
Feel free to connect via GitHub profile.
