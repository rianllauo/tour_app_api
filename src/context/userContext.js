import { createContext, useReducer } from "react";
import jwt_decode from "jwt-decode";

export let UserContext = createContext();

const initialState = {
   isLogin: false,
   user: {},
};

const reducer = (state, action) => {
   const { type, payload } = action;

   switch (type) {
      case "USER_SUCCESS":
      case "LOGIN_SUCCESS":
         const decode = jwt_decode(payload);
         console.log(decode);
         // localStorage.setItem("token", payload.token);
         // localStorage.setItem("user", JSON.stringify(payload));
         return {
            isLogin: true,
            token: payload,
            user: decode,
         };
      case "AUTH_ERROR":
      case "LOGOUT":
         //  localStorage.removeItem("token");
         //  localStorage.removeItem("user");
         return {
            isLogin: false,
            token: "",
            user: {},
         };
      default:
         throw new Error();
   }
};

export const UserContextProvider = ({ children }) => {
   const [state, dispatch] = useReducer(reducer, initialState);

   return (
      <UserContext.Provider value={[state, dispatch]}>
         {children}
      </UserContext.Provider>
   );
};
