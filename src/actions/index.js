let counter = 0

export const addPost = (title, url, description) => ({
    type: 'ADD_POST',
    id: counter++,
    title,
    url,
    description
})

export const editPost = (index, title, url, description) => ({
    type: 'EDIT_POST',
    index,
    title,
    url,
    description
})

export const deletePost = (index) => ({
    type: 'DELETE_POST',
    index
})

export const changeBio = (url, description) => ({
    type: 'CHANGE_BIO',
    url,
    description
})