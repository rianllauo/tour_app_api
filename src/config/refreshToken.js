import { API } from "./api";
import { setAuthToken, removeAuthToken } from "./api";

const refreshToken = async () => {
   try {
      const response = await API.get("/token");
      setAuthToken(response.data.accessToken);
   } catch (error) {
      removeAuthToken();
      return Promise.reject(error);
   }
};

export default refreshToken;
