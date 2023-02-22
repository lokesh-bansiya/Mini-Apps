import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({children}) => {
    const token = useSelector((store) => store.AuthReducer.token);
    const location = useLocation();

    if(!token){
        return <Navigate to="/" replace state={{ data: location.pathname }}/>
    };
    return children;
};

export default RequireAuth;