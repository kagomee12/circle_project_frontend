
import { Box } from "@mui/material";
import Profilebox from "../components/about/Profilebox";
import PostProfile from "../components/about/postProfile";
import useStore from "../stores/hook";

function FullProfil() {
  const { user } = useStore();
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
        }}
      >
        <Profilebox />
      </Box>
      <Box>
        <PostProfile user_id={user.id}/>
      </Box>
    </>
  );
}

export default FullProfil;
