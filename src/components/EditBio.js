import React, { useState } from 'react'
import { connect } from 'react-redux'
import { changeBio } from '../actions'

const EditBio = ({ dispatchChangeBio }) => {
    const [url, setUrl] = useState('')
    const [description, setDescription] = useState('')


    return (
        <div className='dataSection'>
            <div>
                <input className='dataEntry' placeholder={"URL"} onChange={e => setUrl(e.target.value)}/>              
            </div>
            <div>
                <input className='dataEntry' placeholder={"Description"} onChange={e => setDescription(e.target.value)}/>
            </div>
            <div>
                <button className='button' onClick={() => dispatchChangeBio(url, description)}>Make Bio</button>
            </div>

        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    dispatchChangeBio: (u, d) => dispatch(changeBio(u, d))
})

export default connect(null, mapDispatchToProps) (EditBio)