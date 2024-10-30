import { Navigate, Outlet } from "react-router-dom";
import Profil from "../components/about/Profil";
import { Box } from "@mui/material";
import Sidebar from "../components/about/Navbar";
import useStore from "../stores/hook";

const RootLayout = () => {
  const { isLogin } = useStore();

  if (!isLogin) {
    return <Navigate to="/Login" />;
  }

  return (
    <>
      <Box sx={{ display: "flex", width: "100%", backgroundColor: "#1D1D1D" }}>
        <Box
          sx={{
            height: "100vh",
            backgroundColor: "#1D1D1D",
            flex: 1,
            position: "sticky",
            top: 0,
            overflow: "auto",
          }}
        >
          <Sidebar />
        </Box>
        <Box
          sx={{
            height: "100vh",
            backgroundColor: "#1D1D1D",
            borderRight: "solid white",
            borderLeft: "solid white",
            flex: 3,
            overflow: "auto",
          }}
        >
          <Outlet />
        </Box>
        <Box
          sx={{
            height: "100vh",
            backgroundColor: "#1D1D1D",
            flex: 2,
            overflow: "auto",
          }}
        >
          <Profil />
        </Box>
      </Box>
    </>
  );
};

export default RootLayout;
