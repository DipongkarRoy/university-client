// import { ReactNode } from "react";
// import { useAppSelector } from "../../redux/hook";
// import { Navigate } from "react-router-dom";
// import { useCurrentToken } from "../../redux/features/auth/AuthSlice";


// const ProtectedRoutes = ({children}:{children:ReactNode}) => {
//     const token = useAppSelector(useCurrentToken) ;
//     if(!token){
//         return <Navigate to ='/' replace={true}></Navigate>
//     }
//     return children ;
    
// };

// export default ProtectedRoutes;