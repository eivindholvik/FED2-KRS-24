import { Routes, Route } from "react-router-dom";

import Home from "../Home";
import About from "../About";
import Albums from "../Albums";
import Layout from "../Layout";
import Album from "../Albums/Album";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="albums" element={<Albums />}>
                        <Route path=":id" element={<Album />}></Route>
                    </Route>
                    <Route path="*" element={<h1>Page Not Found</h1>} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
