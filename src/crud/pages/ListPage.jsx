import { Layout } from "../layout/Layout"
import { useActionContext } from "../context/ActionProvider"
import { Task } from "../components/Task";

export const ListPage = () => {

    const { state } = useActionContext();
    return (
        <Layout>
            <h1 className="mb-3">List Page</h1>

            {state.length === 0 ? (
                <h1>No hay tareas, Agrega una</h1>
            ) : (
                <div className="grid">
                    {
                        state.map(task => (
                            <Task key={task.id} task={task} />
                        ))
                    }
                </div>
            )}

        </Layout>
    )
}
