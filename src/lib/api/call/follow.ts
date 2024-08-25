import axios from 'axios';


export const Follow = async (user_id: number) => {
        try {
        const response = await axios.post(`http://localhost:3000/follow/${user_id}`
            , {},{ 
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        }
        );
        return response.data;
        } catch (error) {
        console.error(error);
        }
        
}

export const getFollowing = async (followingid: number) => {
    try {
    const response = await axios.get(`http://localhost:3000/follow/${followingid}`
        , { 
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    }
    );
    return response.data;
    } catch (error) {
    console.error(error);
    }
}
export const countFollowing = async (followingid: number) => {
    try {
    const response = await axios.get(`http://localhost:3000/follow/countfollowing/${followingid}`
        , { 
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    }
    );
    return response.data;
    } catch (error) {
    console.error(error);
    }
}
export const countFollower = async (followerid: number) => {
    try {
    const response = await axios.get(`http://localhost:3000/follow/countfollower/${followerid}`
        , { 
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    }
    );
    return response.data;
    } catch (error) {
    console.error(error);
    }
}
