import { Box, Typography } from "@mui/material";
import images from "../../assets/images/a3ead9bdd8650aeb12505ec58cee3c99.jpg";
import { useEffect, useState } from "react";
import { IContent } from "../../Types/content";
import { getPostsbyId } from "../../lib/api/call/post";
import LikeButton from "./likeButton";
import { useParams } from "react-router-dom";



const CommentItembyId = () => {
  const [content, setContent] = useState<IContent>();
  const {id} = useParams();
  const parentId = id ? parseInt(id) : -1;
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        
        const data = await getPostsbyId(parentId);
        console.log(data);
        setContent(data);

      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [content]);
  return (
   <>
    <Box sx={{ display: "flex", width: "80%", margin: "auto", marginTop: "20px", gap: "20px", flexDirection: "column" }}>


                <Box sx={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "20px",borderBottom: "1px solid grey" }} >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <img src={images} alt="" style={{ objectFit: "cover", width: "50px", height: "50px", borderRadius: "100%" }} />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Box>
                            <Typography sx={{ color: "white" }}>
                                {content?.author.fullName}
                            </Typography>
                            <Typography sx={{ color: "grey" }}>
                              {content?.author.username}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ color: "grey" }}>
                                {content?.content}
                            </Typography>
                        </Box>
                        <Box >
                            <Typography>
                                <LikeButton post_id={content?.id ?? -1} />
                            </Typography>
                        </Box>
                    </Box>
                </Box>


    </Box>
          </>
    );
};

export default CommentItembyId
