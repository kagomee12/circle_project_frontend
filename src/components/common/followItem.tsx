import { useEffect } from "react";
import useStore from "../../stores/hook";
import { Avatar, Box, Link, Typography } from "@mui/material";
import images from "../../assets/images/pngwing.com.png";

export const FollowersItem = () => {
  const { user, getInfoFollower, followers } = useStore();
  const BaseURL = "http://localhost:3000/uploads/";

  useEffect(() => {
    getInfoFollower(user.id);
  }, []);

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
        {followers.map((items, index) => (
          <Box
            key={index}
            sx={{
              flex: "1",
              color: "white",
              flexDirection: "row",
              width: "100%",
              display: "flex",
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
                  src={
                    items?.followers?.profil_pic
                      ? `${BaseURL}${items.followers?.profil_pic}`
                      : images
                  }
                  style={{ width: "100%", borderRadius: "100%" }}
                />
              </Box>
            </Box>
            <Box sx={{ flex: "4" }}>
              <Typography sx={{ color: "white" }} fontSize={"16px"}>
                {items.followers?.fullName}
              </Typography>
              <Typography
                sx={{ color: "grey", textDecoration: "none" }}
                fontSize={"12px"}
              >
                <Link
                  component="a"
                  href={`/profile/${items.followers?.username}`}
                >
                  @{items.followers?.username}
                </Link>
              </Typography>
            </Box>
            <Box
              sx={{
                flex: "3",
                justifyContent: "end",
                display: "flex",
                marginRight: "5px",
              }}
            ></Box>
          </Box>
        ))}
      </Box>
    </>
  );
};
export const FollowingItem = () => {
  const { user, getInfoFollowing, following } = useStore();
  const BaseURL = "http://localhost:3000/uploads/";

  useEffect(() => {
    getInfoFollowing(user.id);
  }, []);

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
        {following.map((items, index) => (
          <Box
            key={index}
            sx={{
              flex: "1",
              color: "white",
              flexDirection: "coloumn",
              width: "100%",
              display: "flex",
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
                  src={
                    items?.following?.profil_pic
                      ? `${BaseURL}${items.following?.profil_pic}`
                      : images
                  }
                  style={{ width: "100%", objectFit: "cover" }}
                />
              </Box>
            </Box>
            <Box sx={{ flex: "4" }}>
              <Typography sx={{ color: "white" }} fontSize={"16px"}>
                {items.following?.fullName}
              </Typography>
              <Typography
                sx={{ color: "grey", textDecoration: "none" }}
                fontSize={"12px"}
              >
                <Link
                  component="a"
                  href={`/profile/${items.following?.username}`}
                >
                  @{items.following?.username}
                </Link>
              </Typography>
            </Box>
            <Box
              sx={{
                flex: "3",
                justifyContent: "end",
                display: "flex",
                marginRight: "5px",
              }}
            ></Box>
          </Box>
        ))}
      </Box>
    </>
  );
};
