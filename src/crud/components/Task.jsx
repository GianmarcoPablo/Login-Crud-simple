import { useActionContext } from "../context/ActionProvider"
import { useNavigate } from "react-router-dom";

export const Task = ({ task }) => {

    const navigate = useNavigate();
    const {deleteTask} = useActionContext();

    return (
        <div className='bg-white'>
            <h3>Title: <b>{task.title}</b></h3>
            <p>Description: <b>{task.description}</b> </p>
            <div className='dos-botones'>
                <button
                    className="btn btn-danger"
                    onClick={()=>deleteTask(task.id)}
                >
                    Delete
                </button>
                <button
                    onClick={()=>navigate(`/edit/${task.id}`)}
                    className="btn btn-edit"
                >
                    Edit
                </button>
            </div>
        </div>
    )
}
