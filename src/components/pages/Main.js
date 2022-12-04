import React from 'react'
import './index.css';

let Main = () => {
    return (
        <div className='container-fluid bg-black py-5'>
            <div className='row py-5 mx-auto bg-warning w-75'>
                <div className='col-4'>
                    <h1 className='text-center text-white'>First Column</h1>
                </div>
                <div className='col-4'>
                    <h1 className='text-center text-white'>Second Column</h1>
                </div>
            </div>
        </div>
    )
}

export default Main;