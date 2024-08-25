export interface IContent {
    id: number;
    content: string;
    createdAt: string; 
    user_id: number;
    author: IAllUser;
    comments: any[];
    parent_id?: number; 
    images: string[];
    likes: any[];
 }

 export interface IAllUser {
    username: string;
    email: string;
    fullName: string;
    profile?: IProfile;
 }