import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

const PrivateUser = () => {
   const [state, dispatch] = useContext(UserContext);

   return <div>{state.token ? <Outlet /> : <Navigate to="/" />}</div>;
};

export default PrivateUser;
