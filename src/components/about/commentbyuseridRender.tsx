import { Avatar, Box, Typography } from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useEffect, useState } from "react";
import { IContent } from "../../Types/content";
import { getPostsbyUserId, getPostsimagesbyId } from "../../lib/api/call/post";
import CommentIcon from "@mui/icons-material/Comment";
import { Link } from "react-router-dom";
import LikeButton from "./likeButton";
import { Timeinfo } from "../common/durationTime";
import { GetReply } from "./countReply";
import React from "react";



interface IProps {
    user_id: number
}

export const CommentItembyuserId: React.FC<IProps> = ({ user_id }) => {
  const [content, setContent] = useState<IContent[]>([]);
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        
        const data = await getPostsbyUserId(user_id);
        
        setContent(data);

      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  if (content.length === 0) {
    return (
      <Box>
        no post yet
      </Box>
    );
  }

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
              <Avatar
                src={`${item.author.profil_pic}`}
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
              <Box>
              {item?.images && item.images.length > 0 && (
            <ImageList sx={{ display: "flex" }}>
              {item.images.map((image, index) => (
                <ImageListItem key={index}>
                  <img
                    src={`${image.image}`}
                    alt={`Post Image ${index + 1}`}
                    style={{ width: "50%", height: "auto" }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          )}
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











































export const StandardImageList: React.FC<IProps> = ({user_id}) => {
  const [content, setContent] = useState<IContent[]>([]);
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        
        const data = await getPostsimagesbyId(user_id);

        
        setContent(data);

        
        


      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  if (content.length === 0) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", color: "white" }}>
        no post yet
      </Box>
    );
  }

  return (
    <>
      <ImageList sx={{ width: "100%", height: 450 }} cols={3} rowHeight={164}>
        {content.map((item, index) => (
          <ImageListItem key={index}>
            <Link to={`/media/${item.id}`} style={{ textDecoration: "none" }}>
            <img
              src={`${item.images[0].image}`}
              alt={`Post Image ${index + 1}`}
              style={{ width: "100%", height: "auto" }}
              loading="lazy"
            />
            </Link>
         </ImageListItem>
        ))}
      </ImageList>
    </>
     
  )
}

