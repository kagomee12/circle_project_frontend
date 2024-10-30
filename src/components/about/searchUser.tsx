import { TextField, Stack, Box, Typography, Avatar } from "@mui/material";

import { useEffect, useState } from "react";
import images from "../../assets/images/pngwing.com.png";
import { searchUser, getAllUser } from "../../lib/api/call/user";
import useStore from "../../stores/hook";
import FollowButton from "./followingButton";
import { Link } from "react-router-dom";

export default function Search() {
  const [users, setUsers] = useState<any>([]);
  const { user } = useStore();

  async function getUsers() {
    try {
      const x = await getAllUser();
      setUsers(x.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getSearch(username: string) {
    try {
      const x = await searchUser(username);
      setUsers(x.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Stack direction="column" gap={3}>
        <TextField
          onChange={(e) => {
            if (e.target.value !== "") getSearch(e.target.value);
            else getUsers();
          }}
          label="search"
          variant="filled"
          sx={{
            borderRadius: "10px",
            mb: "15px",
            border: "solid white 1px",
            "& .MuiInputLabel-filled": { color: "gray" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white",
              },
              "&:hover fieldset": {
                borderColor: "white",
              },
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
            },
            "& .MuiInputLabel-root": {
              color: "white",
            },
            width: "90%",
            margin: "auto",   
            marginTop: "30px",
          }}
          size="small"
          inputProps={{ style: { color: "white" } }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          {users?.map((items: any) => (
            <Box
              sx={{
                flex: "1",
                display: items.username == user.username ? "none" : "flex",
                color: "white",
                flexDirection: "row",
                backgroundColor: "#262626",
                width: "90%",
                margin: "auto",
                borderRadius: "10px",
                padding: "10px",
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
                    src={items.profil_pic}
                  />
                </Box>
              </Box>
              <Box sx={{ flex: "4" }}>
                <Typography sx={{ color: "white" }} fontSize={"16px"}>
                  {items.fullName}
                </Typography>
                <Typography
                  sx={{ color: "grey", textDecoration: "none" }}
                  fontSize={"12px"}
                >
                  <Link to={`/profile/${items.username}`}>
                    @{items.username}
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
              >
                <Typography>
                  <FollowButton followingid={items.id} />
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Stack>
    </>
  );
}
