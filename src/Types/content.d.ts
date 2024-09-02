export interface IContent {
    id: number;
    content: string;
    createdAt: string; 
    user_id: number;
    author: IAllUser;
    comments: any[];
    parent_id?: number; 
    images: [{
      id: number
      image: string
      post_id: number
    }];
    likes: any[];
 }

 export interface IAllUser {
    username: string;
    email: string;
    fullName: string;
    profil_pic: string;
 }

