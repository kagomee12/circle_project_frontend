import { Navigate } from "react-router-dom";
import Login from "../pages/Login"
import useStore from "../stores/hook"


const SessionLogin = () => {
    const { isLogin } = useStore();

    if (isLogin) {
       return <Navigate to="/" />;
    }
 
    return (
    
    <Login/>
    
    )
}

export default SessionLogin