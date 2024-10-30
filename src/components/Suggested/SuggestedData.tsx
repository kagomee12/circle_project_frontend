import { Avatar, Box,  Typography } from "@mui/material";
import { useEffect, useState } from "react";
import images from "../../assets/images/pngwing.com.png";
import { getAllUser } from "../../lib/api/call/user";
import { IAllUser } from "../../Types/store";
import useStore from "../../stores/hook";
import FollowButton from "../about/followingButton";
import { Link } from "react-router-dom";

const AllUser = () => {
  const [userother, setUserother] = useState<IAllUser[]>([]);
  const { user } = useStore()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllUser();
        setUserother(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [user]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          justifyContent: "space-between",
          gap: "10px",
        }}
      >
        {userother?.map((items, index) => (
          <Box
            key={index}
            sx={{
              flex: "1",
              display: items.username == user.username ? "none" : "flex",
              color: "white",
              flexDirection: "row",
            }}
          >
            <Box
              sx={{
                flex: "1",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: "100%",
                  width: "40px",
                  height: "40px",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <Avatar
                  src={items.profil_pic ? `${items.profil_pic}` : images}
                />
              </Box>
            </Box>
            <Box sx={{ flex: "4" }}>
              <Typography sx={{ color: "white" }} fontSize={"16px"}>
                {items.fullName}
              </Typography>
              <Typography sx={{ color: "grey", textDecoration: "none" }} fontSize={"12px"}>
                
                <Link to={`/profile/${items.username}`}>@{items.username}</Link>
              </Typography>
            </Box>
            <Box
              sx={{
                flex: "3",
                justifyContent: "end",
                display: "flex",
                marginRight: "5px",
              }}
            >
              <Typography>
                <FollowButton followingid={items.id} />
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default AllUser;

