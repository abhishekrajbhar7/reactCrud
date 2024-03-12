import React from 'react'
import Copy from '../image/copyright.png'
export default function Footer() {
  return (
    <div className='footermain'>
        <div className='footer'>
                <p className='para'><img className='copywrite' src={Copy} alt="copy" />All Rights Reserved</p>
        </div>
    </div>
  )
}
