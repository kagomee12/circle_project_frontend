import { api } from "..";

export const like = async (post_id: number) => {
    try {
        const responseLike = await api.post(`like/${post_id}`
            ,{}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }
            }
        )
        return responseLike.data
    } catch (error) {
        console.log(error);
        
    }
}

export const getLike = async (post_id: number) => {
    try {
        const responseLike = await api.get(`like/${post_id}`
            , {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }
            }
        )
        return responseLike.data
    } catch (error) {
        console.log(error);
        
    }
}

export const getThislike = async (post_id: number) => {
    try {
        const responseLike = await api.get(`like/count/${post_id}`
            , {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }
            }
        )
        return responseLike.data
    } catch (error) {
        console.log(error);
        
    }
}
