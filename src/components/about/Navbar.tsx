import NavItem from "./NavbarItem";
import { Box, Button, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import useStore from "../../stores/hook";

const Sidebar = () => {
   const {clearUser} = useStore()
   return (
      <Box
         sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            paddingRight: 3,
            paddingLeft: 3,
            
         }}
      >
         <Typography
            variant="h3"
            sx={{ color: "rgba(4, 200, 30, 1)", fontWeight: "bold" }}
         >
            Circle
         </Typography>

         <NavItem />

         <Button
            variant="contained"
            color="success"
            sx={{
               color: "white",
               backgroundColor: "rgba(4, 200, 30, 1)",
            }}
         >
            Create Post
         </Button>
         <Button
            startIcon={<Icon icon="solar:logout-2-outline" />}
            sx={{ mt: "auto" }}
            onClick={() => clearUser()}

         >
            Logout
         </Button>
      </Box>
   );
};

export default Sidebar;