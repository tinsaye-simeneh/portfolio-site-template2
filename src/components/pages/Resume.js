import React from 'react'
import SIdeBar from './SideBar';
import '../../index.css'

const Resume = () => {
    return(
        <div className='container-fluid py-5 bg-black'>
            <div className='row py-5'>
                <SIdeBar/>
                <div className='col-md-3'>
                </div>
            </div>
        </div>
    )
}

export default Resume;