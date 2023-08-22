import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import 'bootstrap/dist/css/bootstrap.min.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ToastContainer position={"top-center"}/>
        <App/>
    </React.StrictMode>,
)
