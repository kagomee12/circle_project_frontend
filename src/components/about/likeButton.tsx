import  { useEffect, useState } from 'react';
import {like, getLike, getThislike} from "../../lib/api/call/like"
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Box } from '@mui/material';

interface LikeButtonProps {
    post_id: number
}


const LikeButton: React.FC<LikeButtonProps> = ({post_id}) => {
    const [isliked, setLiked] = useState<Boolean>()
    const [count, setCount] = useState<number>(0)
    const onClick = async () => {
        const result = await like(post_id)
        const countResult =await getThislike(post_id)
        
        setLiked(result.liked)
        setCount(countResult.total_likes)

        }
    useEffect(() => {
        const fetchLikestatus = async () => {
            const result = await getLike(post_id)
            
            const countResult =await getThislike(post_id)
            setCount(countResult.total_likes)
            setLiked(result.liked)
        };
        fetchLikestatus();
    }, [ post_id])

    

    return (
        <>
        <Box sx={{display: 'flex', alignItems: 'center', gap: 0.5}}>
        {isliked == true ? <FavoriteIcon onClick={onClick} /> : <FavoriteBorderIcon onClick={onClick} />}
        {count}
        </Box>  
        </>
    )
    
}

export default LikeButton

