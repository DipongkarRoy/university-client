import { ReactNode } from "react";
import { useAppSelector } from "../../redux/hook";
import { Navigate } from "react-router-dom";
import { useCurrentToken } from "../../redux/features/auth/AuthSlice";


const ProtectedRoutes = ({children}:{children:ReactNode}) => {
    const tokens= useAppSelector(useCurrentToken)
    console.log(tokens);
    if (!tokens){
        return <Navigate to ='/login' replace={true}></Navigate>
    }
    return children ;
};

export default ProtectedRoutes;