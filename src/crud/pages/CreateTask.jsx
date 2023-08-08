import { Layout } from "../layout/Layout"
import { useState, useEffect } from "react";
import { useActionContext } from "../context/ActionProvider";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom"


export const CreateTask = () => {

    const { addTask, editTask, state } = useActionContext();

    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const objtask = {
            title,
            description,
        }
        if (!id) {
            //add
            objtask.id = window.crypto.randomUUID()
            addTask(objtask);
        } else {
            //edit
            objtask.id = id;
            editTask(id, objtask);
        }
        setTitle("");
        setDescription("");
        navigate("/list");
    }

    useEffect(() => {
        if (id) {
            const task = state.find(task => task.id === id);
            setTitle(task.title);
            setDescription(task.description);
        }
    }, [])

    return (
        <Layout>
            <h1 className="mb-3">{id ? "Edit Page" : "Create Page"}</h1>
            <form onSubmit={handleSubmit}>
                <div className="aux-col">
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        type="text"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <input className="btn-login" type="submit" value="Añadir tarea" />
                </div>
            </form>
        </Layout>
    )
}
