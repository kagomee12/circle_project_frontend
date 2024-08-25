import { RouteObject } from 'react-router-dom';
import RootLayout from '../Layout/RootLayout';
import Home from '../pages/Home';
import Search from '../pages/Search';
import FullProfil from '../pages/FullProfil';
import Follow from '../pages/Follow';
import Session from '../Layout/session';
import SessionLogin from '../Layout/SessionLogin';
import Reply from '../pages/reply';
import UserProfil from '../pages/userProfil';



const routes: RouteObject[] = [
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <Home />,
            },{
                path: "/Home",
                element: <Home/>
            }
            ,{
                path: "/Search",
                element: <Search/>
            },{
                path: "/Follow",
                element: <Follow/>
            },{
                path: "/Profil/:username",
                element: <FullProfil/>,
            }
            ,{
                path: "/reply/:id",
                element: <Reply/>
            },{
                path: "/profile/:username",
                element: <UserProfil/>
            }
            
        ]
    },{
        path: "/Register",
        element: <Session/>
    },{
        path: "/Login",
        element: <SessionLogin/>
    }
]
export default routes;