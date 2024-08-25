import axios  from "axios"

export const like = async (post_id: number) => {
    try {
        const responseLike = await axios.post(`http://localhost:3000/like/${post_id}`
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
        const responseLike = await axios.get(`http://localhost:3000/like/${post_id}`
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
        const responseLike = await axios.get(`http://localhost:3000/like/count/${post_id}`
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
