import { useState } from 'react'
import '../App.css'
import log from '../image/logo.jpg'
import List from '../component/List'
function Home() {
  

  return (
    <>
      <div className='container'>
            <div>
              <img className='logo' src={log} alt="logo" />
              <p className='para'>Write About Your Daily Routine Worksheet</p>
            </div>
            <List />
      </div>
    </>
  )
}

export default Home