import { Box, Typography } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import images from "../../assets/images/a3ead9bdd8650aeb12505ec58cee3c99.jpg";
import { useEffect, useState } from "react";
import { IContent } from "../../Types/content";
import { getReply } from "../../lib/api/call/reply";
import { like } from "../../lib/api/call/like";
import LikeButton from "./likeButton";
import { Link, useParams } from "react-router-dom";
import { GetReply } from "./countReply";

const ReplyItem = () => {
  const [content, setContent] = useState<IContent[]>([]);
  const [count, setCount] = useState<Number>(0)
  const { id } = useParams();
  const parent_id = parseInt(id || "0");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getReply(parent_id);
        setContent(data.posts || []);
        setCount(data.get)
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [content, count]);

  return (
    <>
    
      <Box
        sx={{
          display: "flex",
          width: "80%",
          margin: "auto",
          marginTop: "20px",
          gap: "20px",
          flexDirection: "column",
        }}
      >
        {content?.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              borderTop: "1px solid grey",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img
                src={images}
                alt=""
                style={{
                  objectFit: "cover",
                  width: "50px",
                  height: "50px",
                  borderRadius: "100%",
                }}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "6px",
              }}
              >
                <Typography sx={{ color: "white", fontSize: "20px" }}>
                  {item.author.fullName}
                </Typography>
                <Typography sx={{ color: "grey", fontSize: "17px" }}>
                  @{item.author.username}
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ color: "grey" }}>{item.content}</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: "20px" }}>
                <Typography sx={{
                        color: "grey",
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                      }}>
                  <LikeButton post_id={item.id} />
                </Typography>
                <Typography sx={{
                        color: "grey",
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                      }}
                      >
                  <Link to={`/reply/${item.id}`}>
                    <CommentIcon sx={{ color: "grey", size: "20px" }}/>
                  </Link>
                  <GetReply parent_id={item.id}/>
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default ReplyItem;
