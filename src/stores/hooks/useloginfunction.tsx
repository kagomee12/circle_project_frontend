import { setAuthToken } from "../../lib/api";
import * as authAsync from "../../lib/api/call/auth";
import useStore from "../../stores/hook";

export const useLoginFunction = () => {
   const { setUserState, isLogin } = useStore();

   const login = async (email: string, password: string) => {
      try {
         const resToken = await authAsync.login(email, password);
         const profile = await authAsync.checkAuth(resToken);       
         setAuthToken(resToken);
         localStorage.setItem("token", resToken);
      
         setUserState(profile);
      } catch (error) {
         console.log(error);
      }
   };

   return {
      login,
   };
};