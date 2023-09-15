import axios from "../core/axios"

export const SetTranslation = async () => {
    let data = await axios.post("/translations")
    return data.data
}