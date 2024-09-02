
import { api } from "..";


export const Follow = async (user_id: number) => {
        try {
        const response = await api.post(`follow/${user_id}`
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
    const response = await api.get(`follow/${followingid}`
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
    const response = await api.get(`follow/countfollowing/${followingid}`
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
    const response = await api.get(`follow/countfollower/${followerid}`
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

export const getInfoFollower = async (followerid: number) => {
    try {
        const response = await api.get(`follow/getfollower/${followerid}`)
        return response
    } catch (error) {
        console.log(error);
        
    }
}
export const getInfoFollowing = async (followingid: number) => {
    try {
        const response = await api.get(`follow/getfollowing/${followingid}`)
        return response
    } catch (error) {
        console.log(error);
        
    }
}