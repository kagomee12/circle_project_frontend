
import {api} from "../index"


export const posting = async (formData: any) => {
    try {
        
        const res= await api.post("posts", 
           formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        }
    )
    
    return res.data
    } catch (error) {
        console.log(error);
        
    }
   
}

export const getPosts = async () => {
        try {
            const res = await api.get("posts", {
                headers: {  
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            return res.data;
        } catch (error) {
            console.log(error);
        }
        
    }

export const getPostsbyId = async (id: number) => {
    try {
        const res = await api.get(`posts/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
}
export const getPostsimagesbyId = async (user_id: number) => {
    try {
        const res = await api.get(`posts/images/${user_id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
}
export const getPostsbyUserId = async (id: number) => {
    try {
        const res = await api.get(`posts/user/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = async (id: number) => {
    try {
        const res = await api.delete(`posts/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
}
