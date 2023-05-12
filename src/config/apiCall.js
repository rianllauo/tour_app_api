import { API } from "./api";
import refreshToken from "./refreshToken";

const apiCall = async (endpoint) => {
   try {
      const { data } = await API.get(endpoint);
      return data;
   } catch (error) {
      if (error.response.status === 401) {
         const newToken = await refreshToken();
         return apiCall(endpoint, newToken);
      }
      return Promise.reject(error);
   }
};

export default apiCall;
