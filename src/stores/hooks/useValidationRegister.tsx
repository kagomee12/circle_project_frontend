import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IRegisterForm } from "../../Types/register";

export const useValidationRegister = () => {
   const schema = yup.object().shape({
      fullName: yup
         .string()
         .min(3, "fullName must be at least 3 characters")
         .required("fullName is required"),
      username: yup
         .string()
         .min(3, "username must be at least 3 characters")
         .required("username is required"),
      email: yup
         .string()
         .min(3, "email must be at least 3 characters")
         .required("email is required"),
      password: yup
         .string()
         .required("Password is required")
         .min(6, "Password must be at least 6 characters"),
   });

   return useForm<IRegisterForm>({
      resolver: yupResolver(schema),
      defaultValues: {
        fullName: "",
        username: "",
        email: "",
        password: ""
      },
      reValidateMode: "onSubmit",
      mode: "all",
   });
}