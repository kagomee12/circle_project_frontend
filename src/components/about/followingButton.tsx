import  { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import { getFollowing, Follow } from '../../lib/api/call/follow';


interface FollowButtonProps {
    followingid: number
}

const FollowButton: React.FC<FollowButtonProps> = ({followingid}) => {

    const [isFollowing, setFollowing] = useState<Boolean>()
    const onClick = async () => {
        const result = await Follow(followingid)
        setFollowing(result) 
        console.log(result)       
        }
    useEffect(() => {
        const fetchFollowstatus = async () => {
            const result = await getFollowing(followingid)
            setFollowing(result.followed)
            
        };
        fetchFollowstatus();
    }, [followingid])

    return (
        <Box>
        <Button onClick={onClick} color={isFollowing == true ? 'error' : 'success'}> {isFollowing == true ? 'unfollow' : 'follow'} </Button>
        </Box>
    )
    
}

export default FollowButton

