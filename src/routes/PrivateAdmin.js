import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

const PrivateAdmin = () => {
   const [state, dispatch] = useContext(UserContext);

   return (
      <div>
         {state.user.role === "admin" ? <Outlet /> : <Navigate to="/" />}
      </div>
   );
};

export default PrivateAdmin;
