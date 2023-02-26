import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import './loader.css'

function Loader() {
    return (
      <div className='loader_wrapper'>
        <ThreeDots
        height="60"
        width="60"
        color='grey'
        ariaLabel='loading'
        className="offset-md-3"
      />
      </div>
    )
}

export default Loader
