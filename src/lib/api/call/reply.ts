import axios from "axios";

export const reply = async (post_id: number,formData: any) => {
    try {
        const res= await axios.post(`http://localhost:3000/reply/${post_id}`, 
            formData
        ,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        }
    )
    
    return res.data
    } catch (error) {
        console.log(error);
        
    }
   
}

export const getReply = async (id: number) => {
    try {
        const res= await axios.get(`http://localhost:3000/reply/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        }
    )
    
    return res.data
    } catch (error) {
        console.log(error);
        
    }
   
}

export const countReply = async (id: number) => {
    try {
        const res= await axios.get(`http://localhost:3000/reply/count/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        }
    )
    
    return res.data
    } catch (error) {
        console.log(error);
        
    }
   
}