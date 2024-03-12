import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../../services/localStorage/checkAuth";

function PrivateRoute({ children }) {
    if (!isAuthenticated()) {
        return <Navigate to="/login" replace />;
    }
    return children;
}

export default PrivateRoute;
