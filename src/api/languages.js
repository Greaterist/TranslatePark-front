import axios from "../core/axios"

export const getlanguages = async () => {
    let data = await axios.get("/language")
    return data.data
}