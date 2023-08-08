import { createContext, useContext,useReducer } from "react";
import { ActionReducer } from "./ActionReducer";

const ActionContext = createContext();

export const useActionContext = () => useContext(ActionContext);

const initialState = []

export const ActionProvider = ({ children }) => {

    const [state, dispatch] = useReducer(ActionReducer, initialState);

    const addTask = (task) => {
        const action = {
            type: "ADD_TASK",
            payload: task
        }
        dispatch(action);
    }

    const deleteTask = (id) => {
        const action = {
            type: "DELETE_TASK",
            payload: id
        }
        dispatch(action);
    }

    const editTask = (id,updatedTask) => {
        const action = {
            type: "EDIT_TASK",
            payload: {
                id,
                updatedTask
            }
        }
        dispatch(action);
    }

    return (
        <ActionContext.Provider value={{
            addTask,
            deleteTask,
            editTask,
            state
        }}>
            {children}
        </ActionContext.Provider>
    )
}
