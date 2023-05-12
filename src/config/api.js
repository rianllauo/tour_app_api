import axios from "axios";

export const API = axios.create({
   baseURL: "http://localhost:5000/",
});

API.defaults.withCredentials = true;

// export const setAuthToken = (token) => {
//    if (token) {
//       API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//    } else {
//       delete API.defaults.headers.common["Authorization"];
//    }
// };

export const setAuthToken = (token) => {
   API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const removeAuthToken = () => {
   delete API.defaults.headers.common["Authorization"];
};

// API.interceptors.request.use(
//    (response) => {

//    }
// )

// API.interceptors.request.use(
//    async (config) => {
//       // const currentDate = new Date();
//       // if (expire * 1000 < currentDate.getTime()) {
//       const response = await API.get("/token");
//       config.headers.Authorization = `Bearer ${response.data.accessToken}`;
//       // setToken(response.data.accessToken);
//       setAuthToken(response.data.accessToken);
//       // const decode = jwt_decode(response.data.accessToken);
//       // setExpire(decode.exp);
//       // }
//       return config;
//    },
//    (error) => {
//       return Promise.reject(error);
//    }
// );
