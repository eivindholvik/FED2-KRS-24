import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import Layout from "../Layout";
import { Link } from "@mui/material";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="*" element={<h1>Page Not Found</h1>} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
