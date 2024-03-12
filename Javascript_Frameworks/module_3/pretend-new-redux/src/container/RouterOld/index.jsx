import { Routes, Route } from "react-router-dom";

import Home from "../Home";
import About from "../About";
import Albums from "../Albums";
import Layout from "../Layout";
import Album from "../Albums/Album";
import Login from "../Login";
import Something from "../Something";
import PrivateRoutes from "./PrivateRoutes";

function RouterOld() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />

                    <Route element={<PrivateRoutes />}>
                        <Route path="about" element={<About />} />
                        <Route path="something" element={<Something />} />
                    </Route>

                    <Route path="albums" element={<Albums />}>
                        <Route path=":id" element={<Album />} />
                    </Route>
                    <Route path="*" element={<h1>Page Not Found</h1>} />
                </Route>
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    );
}

export default RouterOld;
