import { useEffect, useState } from "react"
import { countFollower, countFollowing } from "../../lib/api/call/follow"
import { Typography } from "@mui/material"

interface IProps {
    followerId: number,
    followingId: number
}
export const GetInfoFollow:React.FC<IProps> = ({ followerId, followingId}) => {
    const [following, setFollowing] = useState<number>(0)
    const [follower, setFollower] = useState<number>(0)
    useEffect(() => {
        const element = async () => {
            const countfollower = await countFollower(followerId);
            const countfollowing = await countFollowing(followingId);
            setFollower(countfollower.FOLLOWING)
            
            setFollowing(countfollowing.FOLLOWING)

            
        }; element()
    }, [follower, following, setFollower, setFollowing, followerId, followingId])
    return (
        <>
            <Typography variant="body2" color="white" >
                {following} Following 
            </Typography>
            <Typography variant="body2" color="white">
                |
            </Typography>
            <Typography variant="body2" color="white" >
                {follower} Followers
            </Typography>
        </>
        
    )
}