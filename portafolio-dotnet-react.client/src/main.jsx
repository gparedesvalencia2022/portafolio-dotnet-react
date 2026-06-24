import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter } from "react-router-dom";
import './stylesheet/App.css'
import './stylesheet/App.mobile.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
    <BrowserRouter
        future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true
        }}
    >
        <App />
        </BrowserRouter>
    </StrictMode>

)
