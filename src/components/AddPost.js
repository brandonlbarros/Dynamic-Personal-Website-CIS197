import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addPost } from '../actions'

const AddPost = ({ dispatchAddPost }) => {
    const [title, setTitle] = useState('')
    const [url, setUrl] = useState('')
    const [description, setDescription] = useState('')


    return (
        <div className='dataSection'>
            <div>
                <input className='dataEntry' placeholder={"Title"} onChange={e => setTitle(e.target.value)}/>
            </div>
            <div>
                <input className='dataEntry' placeholder={"URL"} onChange={e => setUrl(e.target.value)}/>              
            </div>
            <div>
                <input className='dataEntry' placeholder={"Description"} onChange={e => setDescription(e.target.value)}/>
            </div>
            <div>
                <button className='button' onClick={() => dispatchAddPost(title, url, description)}>Add Post</button>
            </div>

        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    dispatchAddPost: (t, u, d) => dispatch(addPost(t, u, d))
})

export default connect(null, mapDispatchToProps) (AddPost)