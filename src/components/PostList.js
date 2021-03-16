import React from 'react'
import Post from './Post'
import { connect } from 'react-redux'

const PostList = ({ posts }) => {

    return (
        <div>
            {posts.map((post,index) =>
                <Post key={index} index={index}/>
            )}
        </div>
    )
}

const mapStateToProps = state => ({
    posts: state.posts
})

export default connect(mapStateToProps) (PostList)