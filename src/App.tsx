import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import * as authAsync from "./lib/api/call/auth";
import useStore from "./stores/hook";
import { useEffect } from "react";

function App() {
  const { setUserState } = useStore();


  async function auth() {
    const resToken = localStorage.getItem("token");

    if (!resToken) {
      return "no token";
    }
    const profile = await authAsync.checkAuth(resToken);
    console.log(profile);

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
  }

  useEffect(() => {
    auth();
  }, []);

  return (
   
      <RouterProvider router={createBrowserRouter(routes)} />
   
  );
}

export default App;
