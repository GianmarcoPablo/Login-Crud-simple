import { useCrudContext } from "../context/CrudProvider"
import { useState } from "react"

export const LoginPage = () => {

    const { onLogin } = useCrudContext()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const user = {
        email,
        password
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if([email,password].includes("")){
            alert("Todos los campos son obligatorios")
            return
        }
        
        onLogin(user)
    }

    return (
        <div className='box-login'>
            <form
                className='card-login'
                onSubmit={handleSubmit}
            >
                <h1>Login</h1>
                <div className='inputs-login'>
                    <input 
                        type="text" 
                        placeholder="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <input 
                        type="password" 
                        placeholder="password" 
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>
                <input
                    type="submit"
                    value="Login"
                    className='btn-login'
                />
            </form>
        </div>
    )
}
