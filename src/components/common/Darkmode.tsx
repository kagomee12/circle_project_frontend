import { useState, createContext} from "react";

const DarkMode = createContext();

const Darktheme = ({children}) => {
    const [user, setUser] = useState(true);

    return (
        <DarkMode.Provider value={{user, setUser}}>
            {children}
        </DarkMode.Provider>
    )
}

export const Dark = DarkMode
export default Darktheme