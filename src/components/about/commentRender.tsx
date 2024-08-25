import { Box, Typography } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import images from "../../assets/images/a3ead9bdd8650aeb12505ec58cee3c99.jpg";
import { useEffect, useState } from "react";
import { IContent } from "../../Types/content";
import { getPosts } from "../../lib/api/call/post";
import LikeButton from "./likeButton";
import { Link } from "react-router-dom";
import { GetReply } from "./countReply";
import {Timeinfo} from "../common/durationTime";

const CommentItem = () => {
  const [content, setContent] = useState<IContent[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPosts();
        setContent(data || []);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [content]);

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
              display: item.parent_id ? "none" : "flex",
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
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
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
                <Typography sx={{ color: "grey", fontSize: "17px" }}>
                <Timeinfo time={new Date(item.createdAt)} />
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ color: "grey" }}>{item.content}</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: "20px" }}>
                <Typography>
                  <LikeButton post_id={item.id} />
                </Typography>
                <Typography>
                  <Box>
                    <Typography
                      sx={{
                        color: "grey",
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                      }}
                    >
                      <Link to={`/reply/${item.id}`}>
                        <CommentIcon sx={{ color: "grey", size: "20px" }} />
                      </Link>
                      <GetReply parent_id={item.id} />
                    </Typography>
                  </Box>
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default CommentItem;
