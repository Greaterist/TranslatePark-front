import axios from "../core/axios"

export const getCommentariesById = async (id) => {
    let data = await axios.get(`/getByWordId/${id}`)
    return data.data
}
