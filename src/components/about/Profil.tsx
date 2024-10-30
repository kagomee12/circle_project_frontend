import { Box, Typography } from "@mui/material";

import useStore from "../../stores/hook";

import { useParams } from "react-router-dom";

import Profilebox from "./Profilebox";
import AllUser from "../Suggested/SuggestedData";

function Profil() {
  const { user } = useStore();
  
  const { username } = useParams();

  return (
    <div
      style={{
        height: "max-content",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={
          user.username == username
            ? { display: "none" }
            : {
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#262626",
                margin: "10px",
                borderRadius: "10px",
                height: "min-content",
              }
        }
      >
        <Profilebox />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#262626",
          margin: "10px",
          borderRadius: "10px",
          height: "200px",
        }}
      >
        <Typography
          sx={{ display: "flex", marginTop: "10px", marginLeft: "10px" }}
        >
          <h3 style={{ color: "white", margin: "0" }}>Suggested For You</h3>
        </Typography>
        <Box sx={{ marginTop: "20px", overflow: "auto", flexDirection: "row" }}>
          <AllUser />
        </Box>
      </Box>
    </div>
  );
}

export default Profil;
