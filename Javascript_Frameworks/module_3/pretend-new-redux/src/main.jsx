import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom"; Denne er for den gamle
import { RouterProvider } from "react-router-dom";

import { Provider } from "react-redux";

// If you need two named imports in the same file
// import { Provider as ContextProvider } from "react";

// import RouterOld from "./container/RouterOld"; Dette er den gamle
import { store } from "./services/store";

import router from "./container/router";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
            {/* <BrowserRouter>
                <RouterOld />
            </BrowserRouter> */}
        </Provider>
    </React.StrictMode>
);
