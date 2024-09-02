import { Button, FormHelperText, Typography } from "@mui/material";
import { Controller, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { ILoginForm } from "../../Types/login";
import CustomInput from "../common/Input";
import { useValidationLogin } from "../../stores/hooks/useValidationLogin";
import { useLoginFunction } from "../../stores/hooks/useloginfunction";
import { toast } from "react-toastify";



const LoginForm = () => {
   const loginFunc = useLoginFunction();
   const { control, handleSubmit} = useValidationLogin();
   const handleOnSubmit: SubmitHandler<ILoginForm> = async (data ) => {
      try {
         await loginFunc.login(data.email, data.password);
         toast.success("Login Successful", {autoClose: 2000});
      } catch (error) {
         console.log(error);
      }
   }
   const onError = (errors: any) => {
      console.log(errors);
   };

   return (
      <form
         style={{
            width: "35rem",
            display: "flex",
            flexDirection: "column",
            gap: 25,
         }}
         onSubmit={handleSubmit(handleOnSubmit, onError)}
      >
         <Typography variant="h3" fontWeight={"bold"} color="green">
            circle
         </Typography>
         <Typography variant="h4" fontWeight={"bold"} color="white">
            Login to circle
         </Typography>
         <Controller
            control={control}
            name="email"
            render={({ field, fieldState }) => (
               <>
                  <CustomInput
                     placeholder="Email/Username*"
                     {...field}
                     error={!!fieldState.error}
                  />
                  <FormHelperText error>
                     {fieldState.error?.message}
                  </FormHelperText>
               </>
            )}
         />
         <Controller
            control={control}
            name="password"
            render={({ field, fieldState }) => (
               <>
                  <CustomInput
                     type="password"
                     placeholder="Password*"
                     sx={{ mb: 2 }}
                     {...field}
                  />

                  <FormHelperText error>
                     {fieldState.error?.message}
                  </FormHelperText>
               </>
            )}
         />
         <Typography variant="body1" color="white">
            <Link
               to={"/auth/forgotpassword"}
               style={{ color: "white", textDecoration: "none" }}
            >
               Forget Password?
            </Link>
         </Typography>
         <Button
            variant="contained"
            type="submit"
            sx={{
               borderRadius: 23,
               backgroundColor: "green",
               color: "white",
            }}
         >
            Login
         </Button>
         <Typography variant="body2" color="white">
            Don't have an account yet?{" "}
            <Link
               to="/Register"
               style={{ color: "green", textDecoration: "none" }}
            >
               Register
            </Link>
         </Typography>
      </form>
   );
};

export default LoginForm