import Api from "../api";
import userRoutes from "../endpoints/userEndpoints";
import errorHandle from "./errorHandler";


export const signup = async(data)=>{
    try {
        const response = await Api.post(userRoutes.signup,data)
        return response
    } catch (error) {
        console.log(error)
        errorHandle(error)
    }
}


export const login = async(data)=>{
    try {
        const response = await Api.post(userRoutes.login,data)
        return response
    } catch (error) {
        console.log(error)
        errorHandle(error)
    }
}

export const verifyOtp = async(data)=>{
    try {
        const response = await Api.post(userRoutes.verifyOtp,data)
        return response
    } catch (error) {
        console.log(error)
        errorHandle(error)
    }
}

