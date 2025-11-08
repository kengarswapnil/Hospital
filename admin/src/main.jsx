import { react,StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import AdmincontextProvider from "./context/AdminContext.jsx";
import DoctorContextProvider from "./context/DoctorContext.jsx";
import AppcontextProvider from "./context/Appcontext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AdmincontextProvider>
      <DoctorContextProvider>
        <AppcontextProvider>
          <App></App>
        </AppcontextProvider>
      </DoctorContextProvider>
    </AdmincontextProvider>
  </BrowserRouter>
);
