import { api } from "..";
import { IRegisterForm } from "../../../Types/register";

export const login = async (email: string, password: string) => {
   const response = await api.post("/auth/login", { email, password });
   console.log(response.data);
   
   return response.data;
};

export const register = async (body: IRegisterForm) => {
   const response = await api.post("/auth/Register", body);
   return response.data;
};

export const checkAuth = async (token: string) => {
   const response = await api.get("/auth/me", {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   });
   return response.data;
};