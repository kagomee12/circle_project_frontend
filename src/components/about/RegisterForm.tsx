import { Button, FormControl, FormHelperText, Typography } from "@mui/material";
import CustomInput from "../common/Input";
import { Link, Navigate } from "react-router-dom";
import { IRegisterForm } from "../../Types/register";
import { useRegisterFunction } from "../../stores/hooks/useRegisterFunction";
import { useValidationRegister } from "../../stores/hooks/useValidationRegister";
import { Controller } from "react-hook-form";



const RegisterForm = () => {
   const { control, handleSubmit, reset } = useValidationRegister();
   const registerFunction = useRegisterFunction();
   const onSubmit = async (data: IRegisterForm) => {
      await registerFunction.register(data);
      reset();
      Navigate({ to: "/login" });
   };
   const onError = (errors: any) => {
      console.log(errors);
   };

   return (
      <form
         style={{
            width: "30rem",
            display: "flex",
            flexDirection: "column",
            gap: 10,
         }}
         onSubmit={handleSubmit(onSubmit,onError)}
      >
         <Typography variant="h3" fontWeight={"bold"} color="green">
            Circle
         </Typography>
         <Typography variant="h4" fontWeight={"bold"} color="white">
            Create account Circle
         </Typography>
         <Controller
            control={control}
            name="fullName"
            render={({ field, fieldState }) => (
               <FormControl error={Boolean(fieldState.error)}>
                  <CustomInput
                     placeholder="Fullname"
                     sx={{ mb: 2 }}
                     {...field}
                  />
                  {Boolean(fieldState.error) && (
                     <FormHelperText>
                        {fieldState.error?.message}
                     </FormHelperText>
                  )}
               </FormControl>
            )}
         />
         <Controller
            control={control}
            name="username"
            render={({ field, fieldState }) => (
               <FormControl error={Boolean(fieldState.error)}>
                  <CustomInput
                     placeholder="username"
                     sx={{ mb: 2 }}
                     {...field}
                  />
                  {Boolean(fieldState.error) && (
                     <FormHelperText>
                        {fieldState.error?.message}
                     </FormHelperText>
                  )}
               </FormControl>
            )}
         />
         <Controller
            control={control}
            name="email"
            render={({ field, fieldState }) => (
               <FormControl error={Boolean(fieldState.error)}>
                  <CustomInput
                     placeholder="email"
                     sx={{ mb: 2 }}
                     {...field}
                  />
                  {Boolean(fieldState.error) && (
                     <FormHelperText>
                        {fieldState.error?.message}
                     </FormHelperText>
                  )}
               </FormControl>
            )}
         />
         <Controller
            control={control}
            name="password"
            render={({ field, fieldState }) => (
               <FormControl error={Boolean(fieldState.error)}>
                  <CustomInput
                     placeholder="password"
                     sx={{ mb: 2 }}
                     {...field}
                  />
                  {Boolean(fieldState.error) && (
                     <FormHelperText>
                        {fieldState.error?.message}
                     </FormHelperText>
                  )}
               </FormControl>
            )}
         />
         <Button type="submit" variant="contained" color="success" sx={{ borderRadius: 23 }}>
            Create
         </Button>

         <Typography variant="body2" color="white">
            Already have account? <Link to={"/Login"} style={{textDecoration: "none"}}> <span style={{ color: "green" }}>Login</span></Link>
         </Typography>
      </form>
   );
};

export default RegisterForm;


