import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";


const axiosInstance = axios.create({
    baseURL: 'https://marathon-server-sable.vercel.app',
    withCredentials: true
})

const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate();

    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response;
        }, error => {
            if (error.status === 401 || error.status === 403) {
                // console.log('need to logout the user')
                logOut()
                .then(() => {
                    // console.log('Logged out user')
                    navigate("/auth/login");
                })
                .catch(error=>{
                    // console.log(error)
                })
            }
            return Promise.reject(error);
        })
    }, [logOut, navigate])

   return axiosInstance;
};

export default useAxiosSecure;