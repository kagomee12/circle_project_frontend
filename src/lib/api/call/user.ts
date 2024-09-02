import axios from 'axios';

export const getAllUser = async () => {
    try {
        const res= await axios.get(`http://localhost:3000/user`,{
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
        const res= await axios.get(`http://localhost:3000/user/profile/${username}`,{
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
        const res= await axios.patch(`http://localhost:3000/user/${id}`,formData,{
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${localStorage.getItem("token")}`,
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
        const res= await axios.get(`http://localhost:3000/user/search/${username}`,{
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
        const res= await axios.get(`http://localhost:3000/user/${id}`,{
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