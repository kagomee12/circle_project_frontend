
import images from "../../assets/images/plain-default-lime-green-neon-solid-color-background-empty-space-anything-studio-room-display-ad-product-220898415.jpg";
import useStore from "../../stores/hook";
import { Avatar, Box, Typography } from "@mui/material";
import { GetInfoFollow } from "../common/countingFollow";
import ModalEditProfile from "./modalsEditProfile";



const Profilebox = () => {
  const { user } = useStore();

  return (
    <>
      <Box>
        <h3 style={{ color: "white", marginLeft: "20px" }}>My Profile</h3>
      </Box>
      <Box
        style={{
          width: "100%",
          height: "75px",
          backgroundColor: "wheat",
          borderRadius: "10px",
          display: "flex"
        }}
      >
        <img
          src={user.profile?.banner_pic ? `${user.profile?.banner_pic}`: images}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            borderRadius: "10px",
          }}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "100%",
          backgroundColor: "red",
          marginTop: "-30px",
          marginLeft: "20px",
          border: "solid rgb(33, 37, 41)",
          display: "flex",
        }}
      >
        <Avatar
          src={`${user.profile?.profil_pic}`}
          style={{ objectFit: "cover", width: "100%",height: "100%", borderRadius: "100%" }}
        />
      </Box>
      <Box>
        <ModalEditProfile/>
      </Box>
      </Box>
      <Box style={{ paddingLeft: "25px", marginTop: "-20px" }}>
        <h2 style={{ color: "white" }}>{user?.fullName}</h2>
      </Box>
      <Box
        style={{
          paddingLeft: "25px",
          height: "max-content",
          marginTop: "-30px",
        }}
      >
        <p style={{ color: "white" }}>@{user.username}</p>
      </Box>
      <Box>
        <Typography sx={{ color: "white", paddingLeft: "25px" }}>
          {user?.bio}
        </Typography>
      </Box>
      <Box sx={{ display: "flex",paddingLeft: "25px", gap : "10px" }}>
        <GetInfoFollow followerId={user.id} followingId={user.id}/>
      </Box>
    </> 
  );
};

export default Profilebox;
