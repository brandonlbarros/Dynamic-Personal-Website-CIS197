import React from 'react'
import { connect } from 'react-redux'

const Bio = ({ bio }) => {

    return (
        <div className='center'>
            <div> {bio.description} </div>
            <img src={bio.url} />
        </div>
    )
}

const mapStateToProps = state => ({
    bio: state.bio
})

export default connect(mapStateToProps) (Bio)