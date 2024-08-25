import image from "../../assets/images/image.png";
import images from "../../assets/images/a3ead9bdd8650aeb12505ec58cee3c99.jpg";
import useStore from "../../stores/hook";
import { Box } from "@mui/material";
import { GetInfoFollow } from "../common/countingFollow";

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
        }}
      >
        <img
          src={images}
          style={{
            objectFit: "cover",
            width: "100%",
            borderRadius: "10px",
            maxHeight: "75px",
          }}
        />
      </Box>
      <Box
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "100%",
          backgroundColor: "red",
          marginTop: "-30px",
          marginLeft: "20px",
          border: "solid rgb(33, 37, 41)",
        }}
      >
        <img
          src={image}
          style={{ objectFit: "cover", width: "100%", borderRadius: "100%" }}
        />
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
      <Box sx={{ display: "flex",paddingLeft: "25px", gap : "10px" }}>
        <GetInfoFollow followerId={user?.id} followingId={user?.id}/>
      </Box>
    </> 
  );
};

export default Profilebox;
