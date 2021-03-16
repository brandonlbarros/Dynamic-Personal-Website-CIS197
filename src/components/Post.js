import React, { useState } from 'react'
import { connect } from 'react-redux'
import { editPost, deletePost } from '../actions'

const Post = ({ posts, index, dispatchEditPost, dispatchDeletePost }) => {
    const [edit, setEdit] = useState(false)
    const [title, setTitle] = useState(posts[index].title)
    const [url, setUrl] = useState(posts[index].url)
    const [description, setDescription] = useState(posts[index].description)

    const handleSubmit = e => {
        e.preventDefault()
        setEdit(!edit)
    }

    return (
        <div className='posts'>
            
            <form onSubmit={handleSubmit}>
                <h3>Post #{index + 1}</h3>
                {edit
                    ? 
                    <div className='dataSection'>
                        <div>
                            <input className='dataEntry' value={title} onChange={e => setTitle(e.target.value)}/>
                        </div>
                        <div>
                            <input className='dataEntry' value={url} onChange={e => setUrl(e.target.value)}/>              
                        </div>
                        <div>
                            <input className='dataEntry' value={description} onChange={e => setDescription(e.target.value)}/>
                        </div>
                        <div>
                            <button className='button' onClick={() => dispatchEditPost(index, title, url, description)}>Done</button>
                            <input className='button' type="submit" value="Cancel" />
                        </div>
                        <div>
                            <button className='button' onClick={() => dispatchDeletePost(index)}>Delete Post</button>
                        </div>
                    </div>
                    : 
                    <div key={posts[index].id}>
                        <div> {posts[index].title} </div>
                        <img src={posts[index].url} />
                        <div> {posts[index].description} </div>
                        <input className='button' type="submit" value="Edit Post" />
                    </div>
                }
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    posts: state.posts
})

const mapDispatchToProps = dispatch => ({
    dispatchEditPost: (i, t, u, d) => dispatch(editPost(i, t, u, d)),
    dispatchDeletePost: (i) => dispatch(deletePost(i))
})

export default connect(mapStateToProps, mapDispatchToProps) (Post)