import NavItem from "./NavbarItem";
import { Box, Button, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import useStore from "../../stores/hook";
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import React from "react";
import Commentsinput from "./CommentsForm";

const style = {
   position: 'absolute' as 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 500,
   bgcolor: '#1D1D1D',
   border: '2px solid #000',
   boxShadow: 24,
   p:4
 };

const Sidebar = () => {
   const {clearUser} = useStore()
   const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
            onClick={handleOpen}
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

         <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
          <Commentsinput/>
          </Box>
        </Fade>
      </Modal>
      </Box>
   );
};

export default Sidebar;