import axios from "../core/axios"

export const getById = async (id) => {
    let data = await axios.get(`/translations/${id}`)
    return data.data[0]
}

export const getWordSearch = async (value) => {
    let data = await axios.get(`/getWordSearch/${value}`)
    return data.data
}

export const getTranslationById = async (id) => {
    let data = await axios.get(`/getTranslationById/${id}`)
    return data.data
}
