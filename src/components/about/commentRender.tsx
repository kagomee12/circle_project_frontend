import { Avatar, Box, Button, ImageList, ImageListItem, Typography } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect} from "react";
import LikeButton from "./likeButton";
import { Link } from "react-router-dom";
import { GetReply } from "./countReply";
import {Timeinfo} from "../common/durationTime";
import useStore from "../../stores/hook";
import { deletePost } from "../../lib/api/call/post";

const CommentItem = () => {
  const {getPosts,post, user} = useStore()
  const BaseURL = 'http://localhost:3000/uploads/';
  
  
  useEffect(() => {
    getPosts();
  }, []);

  const onclick = (post_id: number) => {
    deletePost(post_id)

    getPosts()
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
        {post.map((item, index) => (
          
          <Box
            key={index}
            sx={{
              display: item.parent_id ? "none" : "flex",
              alignItems: "center",
              gap: "20px",
              borderTop: "1px solid grey",
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar
                src={`${BaseURL}${item.author?.profil_pic}`}
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
                <ImageListItem key={index} sx={{ display: "flex", }}>
                  <img
                    src={`${BaseURL}${image.image}`}
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
            <Box sx={user.username == item.author.username && user.fullName == item.author.fullName ? { display: "flex", marginLeft: "auto" } : { display: "none" }}>
                  <Button onClick={() => onclick(item.id)}><DeleteIcon/></Button>
            </Box>
          </Box>
          
        ))}
      </Box>
    </>
  );
};

export default CommentItem;


