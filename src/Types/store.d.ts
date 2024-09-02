import { IContent } from "./content";
import { Ifollower, Ifollowing,Ifolloweruser,Ifollowinguser } from "./follow";

export interface IStoreStates {
    user: IUser;
    post: IContent[];
    following: Ifollowing[];
    followers: Ifollower[]
    isLogin: boolean;
 }
 
 export interface IStoreActions {
    setUserState: (user: IUser) => void;
    clearUser: () => void;
    getPosts: () => Promise<void>;
    getInfoFollower: (followerId: number) => Promise<void>;
    getInfoFollowing: (followingId: number) => Promise<void>
 }
 
 export interface IUser {
   id: number;
    username: string;
    email: string;
    fullName: string;
    profile?: IProfile;
    bio?: string;
 }

 export interface IAllUser {
   id: number,
    username: string,
    fullName: string,
    email: string,
    profil_pic?: string,
    banner_pic?: string,
    post?: Ipost
    bio?: string
 }

 export interface IProfile {
    profil_pic: string;
    banner_pic: string;
 }


 export type TStore = IStoreStates & IStoreActions;