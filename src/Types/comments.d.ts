export interface IstoreComments {
    comments: IComment[];
    like: boolean;
    
 }

 export interface ICommentActions {
    setCommentsState: (comments: IComment[]) => void;
    clearComments: () => void;
    setLikeState: (like: IComment) => void;
 }


export interface IComment {
    komentar: string;
    like: boolean;
    
 }

 export type TComment = IstoreComments & ICommentActions