import { createContext, useEffect, useState } from "react";
import { IUser, TStore } from "../Types/store";
import { setAuthToken } from "../lib/api";
import { boolean } from "yup";


interface StoreProps {
   children: React.ReactNode;
}


export const Store = createContext<TStore | null>(null);


export const StoreProvider: React.FC<StoreProps> = ({ children }) => {
   const [user, setUser] = useState<IUser>({
      email: "",
      fullName: "",
      username: "",
      id: 0,
   });

     // State untuk semua user
   const [isLogin, setIsLogin] = useState(false);

   

   useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
         setIsLogin(true);
      }
   }, []);

   useEffect(()=>{
      const fullName = localStorage.getItem("fullName")
      const username = localStorage.getItem("email")
      const email = localStorage.getItem("usernamr")
      const id = Number(localStorage.getItem("id"));

      if (fullName && username && email && id) {
         setUser({fullName, username, email, id})
      }
   },[]
   );

   const setUserState = (user: IUser) => {
      
      setUser(user);
      setIsLogin(true);
   };

   const clearUser = () => {
      setUser({
         email: "",
         fullName: "",
         username: "",
         id: 0,
      });
      setIsLogin(false);
      localStorage.removeItem("token");
      localStorage.removeItem("userName");
      localStorage.removeItem("fullname");
      localStorage.removeItem("id");
      localStorage.removeItem("email");
   };


   console.log(user, isLogin);

   return (
      <Store.Provider
         value={{
            user,
            isLogin,
            setUserState,
            clearUser,
         }}
      >
         {children}
      </Store.Provider>
   );
};