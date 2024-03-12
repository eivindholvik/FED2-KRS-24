import { createBrowserRouter } from "react-router-dom";

import Home from "../Home";
import About from "../About";
import Albums from "../Albums";
import Layout from "../Layout";
import Album from "../Albums/Album";
import Login from "../Login";
import Something from "../Something";

import PrivateRoute from "./PrivateRoute";

export const myRoutes = [
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />,
            },

            {
                path: "about",
                element: (
                    <PrivateRoute>
                        <About />
                    </PrivateRoute>
                ),
            },
            {
                path: "something",
                element: (
                    <PrivateRoute>
                        <Something />
                    </PrivateRoute>
                ),
                excludeMe: true,
            },
            {
                path: "albums",
                element: <Albums />,
                children: [
                    {
                        path: ":id",
                        element: <Album />,
                    },
                ],
            },
            {
                path: "*",
                element: <h1>Page Not Found</h1>,
            },
        ],
    },
];

const router = createBrowserRouter(myRoutes);

export default router;
