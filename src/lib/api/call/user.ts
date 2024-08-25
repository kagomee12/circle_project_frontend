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