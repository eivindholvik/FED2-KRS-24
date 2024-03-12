import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../../services/localStorage/checkAuth";

function PrivateRoutes() {
    // We should authenticate here
    return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
