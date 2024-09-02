import { api } from "..";

export const reply = async (post_id: number,formData: any) => {
    try {
        const res= await api.post(`reply/${post_id}`, 
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
        const res= await api.get(`reply/${id}`, {
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
        const res= await api.get(`reply/count/${id}`, {
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