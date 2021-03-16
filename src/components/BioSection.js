import React, { useState } from 'react'
import Bio from './Bio'
import EditBio from './EditBio'
import '../stylers/styling.css'


const BioSection = () => {
    const [edit, setEdit] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        setEdit(!edit)
    }

    return (
        <div className='bio'>
            <form onSubmit={handleSubmit}>
                <h1 class = 'leftT'>
                Hello! Welcome to my Page!
                </h1>
                <div class = 'right'>
                {edit
                    ? <input className='button' type="submit" value="Done Editing" />
                    : <input className='button' type="submit" value="Edit Bio" />
                }
                </div>
            </form>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Bio />
            {edit
                ? <EditBio />
                : <div></div>
            }
        </div>
    )
}

export default BioSection