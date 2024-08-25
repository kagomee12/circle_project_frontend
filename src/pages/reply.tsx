import { Box } from "@mui/material";
import Replyinput from "../components/about/ReplyForm";
import CommentItembyId from "../components/about/commentbyIdRender";
import ReplyItem from "../components/about/replyRender";

const Reply = () => {
    return <>
    <Box>
        <CommentItembyId/>  
    </Box>
    <Box>
        <Replyinput/>
    </Box>
    <Box>
        <ReplyItem/>
    </Box>   
    </>;
};

export default Reply