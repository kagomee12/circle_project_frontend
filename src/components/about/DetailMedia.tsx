import { Box } from "@mui/material";
import Replyinput from "./ReplyForm";

import ReplyItem from "./replyRender";
import useStore from "../../stores/hook";
import CommentItembymodal from "./commentformodalsmedia";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostsbyId } from "../../lib/api/call/post";
import { IContent } from "../../Types/content";

const Media = () => {
  const [content, setContent] = useState<IContent>();
  const { id } = useParams();
  const post_id = parseInt(id || "-1");
  const BaseURL = "http://localhost:3000/uploads/";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPostsbyId(post_id);
        
        setContent(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

    return <>
    <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box sx= {{ flex: 1 ,overflow: "auto"}}>
            {content && content.images.length > 0 && (
              <img src={`${BaseURL}${content.images[0].image}`} alt="Content Image" style={{ width:"100%" }} />
            )}
          </Box>
          <Box sx={{ flex: 1, overflow: "auto"}}>
            <Box>
              <CommentItembymodal />
            </Box>
            <Box>
              <Replyinput />
            </Box>
            <Box>
              <ReplyItem />
            </Box>
          </Box>
    </Box>  
    </>;
};

export default Media










  