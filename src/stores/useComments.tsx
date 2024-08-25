import { createContext, useContext, useState } from "react";
import { IComment, TComment } from "../Types/comments";


interface StoreProps {
    children: React.ReactNode;
 }
export const CommentContext = createContext<TComment | null>(null);

export const CommentProvider: React.FC<StoreProps> = ({children}) => {
    const [comments, setComments] = useState<IComment[]>(   
        []
    );

    const [like, setLike] = useState<boolean>(
        false
    );

    const setLikeState: TComment["setLikeState"] = () => {
        setLike(!like);
    }

    const setCommentsState: TComment["setCommentsState"] = (newComments) => {
        setComments(newComments);
    };
     const clearComments = () => {
        setComments([]);

     };

   return <>
   <CommentContext.Provider value={{comments, setCommentsState, clearComments, setLikeState, like}}>
   {children}
   </CommentContext.Provider>
   </>
};

export const useComment = () => {
    const context = useContext(CommentContext);
    if (context === null) {
        throw new Error("useComment must be used within a CommentProvider");
    }
    return context;
};

