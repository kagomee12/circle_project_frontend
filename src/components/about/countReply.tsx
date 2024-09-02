import { useEffect, useState } from "react";
import { countReply } from "../../lib/api/call/reply";

interface replyProps {
    parent_id: number
}

export const GetReply: React.FC<replyProps> = ({parent_id}) => {
    const [count, setCount] = useState<number>(0)

    useEffect(
        () => {
            const FetchReply = async() => {
                const result = await countReply(parent_id)
                setCount(result.get)
                
            };
            FetchReply();
        },[count]
    )
    return (
        <>
        {count}
        </>
    )
}