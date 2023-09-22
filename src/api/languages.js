import axios from "../core/axios"

export const getlanguages = async () => {
    let data = await axios.get("/api/languages")
    return data.data
}