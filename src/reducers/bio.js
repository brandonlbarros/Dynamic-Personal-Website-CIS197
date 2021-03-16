const defaultState = { url: '', description: '' }

const bio = (state = defaultState, action) => {
    const { type, url, description } = action

    switch (type) {
        
        case "CHANGE_BIO":
            return { url, description }

        default:
            return state
    }
}

export default bio