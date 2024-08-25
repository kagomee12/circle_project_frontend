import * as authAsync from "../../lib/api/call/auth";
import { IRegisterForm } from "../../Types/register";

export const useRegisterFunction = () => {
    const register = async (body: IRegisterForm) => {
        try {
            const res = await authAsync.register(body);
            console.log("apa ini",res);
    
            return res;
         } catch (error) {
            console.log(error);
         }
    }
   
    return {
       register
    }
}

