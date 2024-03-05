import ReactDOM from "react-dom/client";
import App from "./container/App/index.jsx";
import { Provider } from "react-redux";
import { store } from "./common/store/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <App />
    </Provider>
);
