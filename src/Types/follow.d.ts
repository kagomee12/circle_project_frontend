export interface Ifollowing {
    followingId: string,
    following: Ifollowinguser
}

export interface Ifollowinguser{
    fullName: string,
    username: string,
    bio?: string,
    profil_pic?: string,
    banner_pic?: string
}

export interface Ifollower {
    followerId: string,
    followers: Ifolloweruser
}

export interface Ifolloweruser{
    fullName: string,
    username: string,
    bio?: string,
    profil_pic?: string,
    banner_pic?: string
}