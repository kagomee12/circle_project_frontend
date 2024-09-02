import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


export const useCommentsvalidation = () =>  {
   
   const schema = yup.object().shape({
      content: yup
      .string()
      .min(3, "comment must be at least 3 characters")
      .required("comment is required"),
      image : yup.mixed().nullable()
   })
   return useForm ({
      resolver: yupResolver(schema),
      defaultValues: {
         content: "",
         image: []
      },
      reValidateMode: "onSubmit",
      mode: "all",
   });
   
}