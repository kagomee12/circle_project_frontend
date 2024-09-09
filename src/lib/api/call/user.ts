import { api } from ".."

export const getAllUser = async () => {
    try {
        const res= await api.get(`user`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        }
    )
    return res.data
}catch(err) {
    console.log(err)
}
}

export const getUser = async (username: string) => {
    try {
        const res= await api.get(`user/profile/${username}`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        }
    )
    return res.data
}catch(err) {
    console.log(err)
}
}

export const updateProfile = async (id: number,formData: any) => {
    try {
        const res= await api.patch(`user/${id}`,formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
                
            }
        }   
    )
    console.log(res.data)
    return res.data
}catch(err) {
    console.log(err)
}
}

export const searchUser = async (username: string) => {
    try {
        const res= await api.get(`user/search/${username}`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        }
    )
    return res.data
}catch(err) {
    console.log(err)
}
}
export const findUser = async (id: number) => {
    try {
        const res= await api.get(`user/${id}`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        }
    )
    return res.data
}catch(err) {
    console.log(err)
}
}