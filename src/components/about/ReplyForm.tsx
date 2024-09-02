import { Avatar, Box, Button } from "@mui/material";


import SendIcon from "@mui/icons-material/Send";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";

import { reply } from "../../lib/api/call/reply";

import CustomInput from "../common/Input";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useStore from "../../stores/hook";
import { toast } from "react-toastify";

const Replyinput = () => {
  const { id } = useParams();
  const parentId = id ? parseInt(id) : -1;
  //Karena id bisa undefined, perlu dicek sebelum diproses oleh parseInt().
  const [content, setContent] = useState<string>("");
  const [image, setImage] = useState<any>(null);
  const BaseURL = "http://localhost:3000/uploads/";

  const { user } = useStore();
  const handleFileChange = (event: any) => {
    if (event.target.files) {
      setImage(event.target.files);
    }
  };
  const handleContentChange = (event: any) => {
    setContent(event.target.value);
  };

  const onSubmit = async (event: any) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("content", content);

    if (image) {
      for (let i = 0; i < image.length; i++) {
        formData.append("image", image[i]);
      }
    }
    await reply(parentId, formData);
    toast.success("Reply Added", { autoClose: 2000 });
  };
  // const onSubmit: SubmitHandler<IComment> = data => (setCommentsState([...comments,data]), reset()) onSubmit={handleSubmit(onSubmit)}

  return (
    <form
      onSubmit={(event) => {
        onSubmit(event);
        setContent("");
        setImage(null);
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "90%",
          alignItems: "center",
          height: "min-content",
          gap: "10px",
          margin: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flex: "1",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Box
            sx={{
              width: "50px",
              height: "50px",
              borderRadius: "100%",
              backgroundColor: "grey",
              flex: "2",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Avatar
              src={`${BaseURL}${user.profile?.profil_pic}`}
              style={{ width: "50px", height: "50px", borderRadius: "100%" }}
              alt="profile"
            />
          </Box>
        </Box>
        <Box sx={{ display: "flex", flex: "8", width: "80%" }}>
          <CustomInput
            name="content"
            placeholder="what do you think ?"
            value={content}
            onChange={handleContentChange}
          />
          <input
            type="file"
            name="image"
            multiple
            onChange={handleFileChange}
            id="image"
            style={{ display: "none" }}
          />
          <label htmlFor="image">
            <InsertPhotoIcon
              sx={{
                color: "white",
                cursor: "pointer",
                "&:hover": {
                  color: "green",
                },
              }}
              fontSize="large"
            />
          </label>
        </Box>
        <Box sx={{ display: "flex", flex: "1" }}>
          <Button type="submit" variant="contained" color="success">
            <SendIcon />
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default Replyinput;
