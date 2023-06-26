import axios from "../core/axios"

export const getCommentaries = async () => {
    let data = await axios.get("/commentaries")
    return data.data
}