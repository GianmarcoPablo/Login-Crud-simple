import { Navigate } from 'react-router-dom';
import { useCrudContext } from '../auth/context/CrudProvider';

export const PublicRouter = ({children}) => {

    const { user } = useCrudContext();
    return (
        user ? <Navigate to="/create" /> : children
    )
}
