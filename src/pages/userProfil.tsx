import { Box } from "@mui/material";
import PostProfile from "../components/about/postProfile";
import DetailUser from "../components/about/userDetail";
import { getUser } from "../lib/api/call/user";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IAllUser } from "../Types/store";

function UserProfil() {
  const [userOther, setUserOther] = useState<IAllUser>();
  const { username } = useParams();
  const userName = username;

  useEffect(() => {
    const fetchUser = async () => {
      const detailUser = await getUser(userName ? userName : "notfound");
      setUserOther(detailUser.data);
      console.log(detailUser.data);
      
    };
    fetchUser();
  }, [username]);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#262626",
          margin: "10px",
          borderRadius: "10px",
          height: "min-content",
          padding: "10px",
        }}
      >
        <DetailUser />
      </Box>
      <Box>
        <PostProfile user_id={userOther ? userOther.id : -1} />
      </Box>
    </>
  );
}

export default UserProfil;
