import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const isAuth = localStorage.getItem("isAuth");
    
    if(!isAuth){
        return <Navigate to="/" />;
    }

    return children
};

export {PrivateRoute};