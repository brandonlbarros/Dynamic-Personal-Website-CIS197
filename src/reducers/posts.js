const defaultState = []

const posts = (state = defaultState, action) => {
    const { type, index, id, title, url, description } = action

    switch (type) {
        case "ADD_POST":
            return [
                ...state, { id, title, url, description }
            ]

        case "EDIT_POST":
            const el = { id, title, url, description }
            state[index] = el

            return [
                ...state
            ]

        case "DELETE_POST":
            state.splice(index, 1)
            return [
                ...state,
            ]
        
        default:
            return state
    }
}

export default posts