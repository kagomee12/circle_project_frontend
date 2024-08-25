import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ILoginForm } from "../../Types/login";

export const useValidationLogin = () => {
   const schema = yup.object().shape({
      email: yup
         .string()
         .min(3, "email must be at least 3 characters")
         .required("email is required"),
      password: yup
         .string()
         .required("Password is required")
         .min(6, "Password must be at least 6 characters"),
   });

   return useForm<ILoginForm>({
      resolver: yupResolver(schema),
      defaultValues: {
         email: "",
         password: "",
      },
      // reValidateMode: "onSubmit",
      mode: "all",
   });
}