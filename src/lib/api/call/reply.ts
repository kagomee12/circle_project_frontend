import axios from "axios";

export const reply = async (id: number,content: string) => {
    try {
        const res= await axios.post(`http://localhost:3000/reply/${id}`, {
            content: content,
        },{
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