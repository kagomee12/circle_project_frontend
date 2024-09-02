import { setAuthToken } from "../../lib/api";
import * as authAsync from "../../lib/api/call/auth";
import useStore from "../../stores/hook";

export const useLoginFunction = () => {
  const { setUserState } = useStore();

  const login = async (email: string, password: string) => {
    try {
      const resToken = await authAsync.login(email, password);
      const profile = await authAsync.checkAuth(resToken);
      setAuthToken(resToken);
      localStorage.setItem("token", resToken);

      setUserState({
        username: profile.username,
        email: profile.email,
        fullName: profile.fullName,
        id: profile.id,
        profile: {
          profil_pic: profile.profil_pic,
          banner_pic: profile.banner_pic,
      
        },
        bio: profile.bio
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    login,
  };
};
