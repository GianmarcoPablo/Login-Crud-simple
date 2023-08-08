import { CreateTask } from "../crud/pages/CreateTask"
import { LoginPage } from "../auth/pages/LoginPage"
import { PublicRouter } from "./PublicRouter"
import { PrivateRouter } from "./PrivateRouter"
import {Routes, Route } from "react-router-dom"
import { ListPage } from "../crud/pages/ListPage"
import { EditPage } from "../crud/pages/EditPage"

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/login" element={
                    <PublicRouter>
                        <LoginPage />
                    </PublicRouter>
                } />

                <Route path="/list" element={
                    <PrivateRouter>
                        <ListPage />
                    </PrivateRouter>
                } />
                <Route path="/edit" element={
                    <PrivateRouter>
                        <EditPage />
                    </PrivateRouter>
                } />
                <Route path="/edit/:id" element={
                    <PrivateRouter>
                        <EditPage />
                    </PrivateRouter>
                } />

                <Route path="/*" element={
                    <PrivateRouter>
                        <CreateTask />
                    </PrivateRouter>
                } />
            </Routes>
        </>
    )
}
