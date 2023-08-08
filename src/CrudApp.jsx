import { AuthProvider } from "./auth/context/CrudProvider"
import { AppRouter } from "./routes/AppRouter"
import { ActionProvider } from "./crud/context/ActionProvider"


export const CrudApp = () => {
    return (
        <AuthProvider>
            <ActionProvider>
                <AppRouter />
            </ActionProvider>
        </AuthProvider>
    )
}
