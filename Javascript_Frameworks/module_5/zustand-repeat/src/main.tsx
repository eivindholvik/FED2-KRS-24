import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Users from "./common/pages/Users";
import Layout from "./common/pages/Layout";

import { CssBaseline } from "@mui/material";

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <CssBaseline />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<App />} />
                    <Route path="users" element={<Users />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
