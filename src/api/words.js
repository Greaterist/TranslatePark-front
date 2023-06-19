import axios from "../core/axios"

export const getById = async (id) => {
    let data = await axios.get("/translations")
    return data.data[id]
}