import axios from "axios";

const baseUrl = import.meta.env.VITE_USER_API_URL;

export const userRegister = async(body) => {
    try {
        const url = `${baseUrl}/register`
        const {data} = await axios.post(url, {body})
        return data;
    } catch (error) {
        console.log(error);
        throw new Error("Hubo un error al registrar usuario")
    }
}

export const userLogin = async(body) => {
    try {
        const url = `${baseUrl}/login`
        const {data} = await axios.post(url, {body})
        return data;
    } catch (error) {
        console.log(error);
        throw new Error("Hubo un error al logear usuario")
    }
}