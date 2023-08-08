import { Link,Navigate } from "react-router-dom"
import { useCrudContext } from "../../auth/context/CrudProvider"

export const Navbar = () => {

    const { onLogout } = useCrudContext()

    return (
        <header className="header">
            <nav className="header-nav">
                <Link to="/create">Create</Link>
                <Link to="/edit">Edit</Link>
                <Link to="/list">List</Link>
                <button className="btn-logout" onClick={onLogout}>Logout</button>
            </nav>
        </header>
    )
}
