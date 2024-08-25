export interface IStoreStates {
    user: IUser;
    isLogin: boolean;
 }
 
 export interface IStoreActions {
    setUserState: (user: IUser) => void;
    clearUser: () => void;
 }
 
 export interface IUser {
   id: number;
    username: string;
    email: string;
    fullName: string;
    profile?: IProfile;
 }

 export interface IAllUser {
   id: number,
    username: string,
    fullName: string,
    email: string,
    profil_pic?: string,
    banner_pic?: string,
    post?: Ipost
 }

 export interface IProfile {
    avatar: string;
    banner: string;
    bio: string;
 }


 export type TStore = IStoreStates & IStoreActions;