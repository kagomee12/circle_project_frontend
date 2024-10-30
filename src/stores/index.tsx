import { createContext, useEffect, useState } from "react";
import { IUser, TStore } from "../Types/store";
import { api } from "../lib/api";

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
  const [post, setPost] = useState([]);
  const getPosts = async () => {
    try {
      const res = await api.get("posts", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setPost(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const [following, setFollowing] = useState([]);

  const getInfoFollowing = async (followingId: number) => {
    try {
      const response = await api.get(`follow/getfollowing/${followingId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setFollowing(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [followers, setFollower] = useState([]);

  const getInfoFollower = async (followerId: number) => {
    try {
      const response = await api.get(`follow/getfollower/${followerId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setFollower(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

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
  };

  return (
    <Store.Provider
      value={{
        user,
        isLogin,
        setUserState,
        clearUser,
        post,
        getPosts,
        getInfoFollower,
        followers,
        following,
        getInfoFollowing,
      }}
    >
      {children}
    </Store.Provider>
  );
};
