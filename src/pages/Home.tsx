import { Box, Typography } from "@mui/material";
import Commentsinput from "../components/about/CommentsForm";
import { useComment } from "../stores/useComments";
import CommentItem from "../components/about/commentRender";
import useStore from "../stores/hook";
// import { getPosts, posting } from "../lib/api/call/post";

const Home = () => {
  
  return (
      <Box>
        <Typography sx={{ color: "white" }}>
          <h1>Home</h1>
        </Typography>

        <Commentsinput />
        <Typography sx={{ color: "white", display: "flex", justifyContent: "center", flexDirection: "row" }}>
        <CommentItem />
        </Typography> 
        
        
      </Box>
  )    
};

export default Home;
