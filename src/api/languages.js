import axios from "../core/axios"

export const getlanguages = async () => {
    let data = await axios.get("/languages")
    return data.data
}