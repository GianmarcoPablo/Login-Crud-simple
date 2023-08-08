export const ActionReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return [...state, action.payload]
            
        case "DELETE_TASK":
            return state.filter(task => task.id !== action.payload)
        case "EDIT_TASK":
            return state.map(task => task.id === action.payload.id ? action.payload.updatedTask : task)
        default:
            return
    }
}