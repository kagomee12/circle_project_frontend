import axios from "axios";


export const posting = async (formData: any) => {
    try {
        
        const res= await axios.post("http://localhost:3000/posts", 
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
            const res = await axios.get("http://localhost:3000/posts", {
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
        const res = await axios.get(`http://localhost:3000/posts/${id}`, {
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
        const res = await axios.get(`http://localhost:3000/posts/images/${user_id}`, {
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
        const res = await axios.get(`http://localhost:3000/posts/user/${id}`, {
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
        const res = await axios.delete(`http://localhost:3000/posts/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
}
