import React, { useState } from 'react'
import AddPost from './AddPost'
import PostList from './PostList'
import '../stylers/styling.css'


const PostSection = () => {
    const [add, setAdd] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        setAdd(!add)
    }

    return (
        <div className='postList'>
            <form onSubmit={handleSubmit}>
                <h3 className='leftT'>
                    Recent Posts:
                </h3>
                <div className='right'>
                    {add
                        ? <input className='button' type="submit" value="Done Adding" />
                        : <input className='button' type="submit" value="Add Posts" />
                    }
                </div>
            </form>
            <br></br>
            <br></br>
            <br></br>
            <div>
                {add
                    ? <AddPost />
                    : <div></div>
                }
            </div>
            <PostList />      
        </div>
    )
}

export default PostSection