import { Avatar, Box, ImageList, ImageListItem, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { IContent } from "../../Types/content";
import { getPostsbyId } from "../../lib/api/call/post";
import LikeButton from "./likeButton";
import { useParams } from "react-router-dom";
import { Timeinfo } from "../common/durationTime";

const CommentItembyId = () => {
  const [content, setContent] = useState<IContent>();
  const { id } = useParams();
  const parentId = id ? parseInt(id) : -1;
  const BaseURL = "http://localhost:3000/uploads/";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPostsbyId(parentId);
        
        setContent(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [parentId]);
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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "20px",
            borderBottom: "1px solid grey",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              src={`${BaseURL}${content?.author.profil_pic}`}
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
            <Box sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "6px",
                }}>
              <Typography sx={{ color: "white", fontSize: "20px" }}>
                {content?.author.fullName}
              </Typography>
              <Typography sx={{ color: "grey", fontSize: "17px" }}>
                @{content?.author.username}
              </Typography>
              <Typography sx={{ color: "grey", fontSize: "17px" }}>
                <Timeinfo time={new Date(content?.createdAt ?? '' )} />
                </Typography>
            </Box>
            <Box>
              <Typography sx={{ color: "grey" }}>{content?.content}</Typography>
            </Box>
            {content?.images && content.images.length > 0 && (
            <ImageList sx={{ display: "flex" }}>
              {content.images.map((image, index) => (
                //Dengan menambahkan satu lagi && di akhir, kita memastikan bahwa JSX 
                //berikutnya (<ImageList> dan isinya)
                //hanya dirender jika semua kondisi di kiri && bernilai true.
                <ImageListItem key={index}>
                  <img
                    src={`${BaseURL}${image.image}`}
                    alt={`Post Image ${index + 1}`}
                    style={{ width: "50%", height: "auto" }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          )}
            <Box>
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

export default CommentItembyId;
