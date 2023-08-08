import { useCrudContext } from "../auth/context/CrudProvider"
import { Navigate } from "react-router-dom"

export const PrivateRouter = ({children}) => {

    const { user } = useCrudContext();
   
    return (
        user ? children : <Navigate to="/login" />
    )
}
