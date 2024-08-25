import { Box } from "@mui/material";
import LoginForm from "../components/about/LoginForm";

const Login = () => {
   return (
      <Box
         sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#1D1D1D",
            padding: "20px",
            width: "100%",
         }}
      >
         <LoginForm/>
      </Box>
   );
};

export default Login;