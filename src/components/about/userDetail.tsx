import { useEffect, useState } from "react";
import { getUser} from "../../lib/api/call/user"
import { IAllUser } from "../../Types/store";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import image from "../../assets/images/image.png";
import images from "../../assets/images/a3ead9bdd8650aeb12505ec58cee3c99.jpg";
import { GetInfoFollow } from "../common/countingFollow";

const DetailUser = () => {
    const [userOther, setUserOther] = useState<IAllUser>();
    const {username} = useParams()
    const userName = username

    useEffect(
        ()=> {
            const fetchUser = async()=> {
                const detailUser = await getUser(userName? userName : "notfound")
                setUserOther(detailUser)

            };
            fetchUser()
        },[username]
    )

    return(
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
        <h2 style={{ color: "white" }}>{userOther?.fullName}</h2>
      </Box>
      <Box
        style={{
          paddingLeft: "25px",
          height: "max-content",
          marginTop: "-30px",
        }}
      >
        <p style={{ color: "white" }}>@{userOther?.username}</p>
      </Box>
      <Box sx={{ display: "flex",paddingLeft: "25px", gap : "10px" }}>
      <GetInfoFollow followerId={userOther? userOther.id : -1} followingId={userOther? userOther.id : -1}/>
      </Box>
      
    </>

    )
}

export default DetailUser