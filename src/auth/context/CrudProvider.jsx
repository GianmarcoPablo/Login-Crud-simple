import { createContext,useContext,useState } from "react";

export const CrudContext = createContext();
export const useCrudContext = () => useContext(CrudContext);

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const onLogin = (user) => {
        setUser(user)
    }

    const onLogout = () => {
        setUser(null)
    }

    return(
        <CrudContext.Provider value={{
            user,
            onLogin,
            onLogout
        }}>
            { children }
        </CrudContext.Provider>
    )
}