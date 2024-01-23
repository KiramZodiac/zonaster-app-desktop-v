import React from 'react'

import Link from 'next/link'

function SideBar() {
  return (
    <div className='sidebar'> 
<div className='items'>
  <ul>
  <li><a href="/" className="nav-link">Home</a></li>
    <li><Link href='./about'>About us</Link></li>
    <li><a href="#" className="nav-link">Services</a></li>
    <li><a href="#" className="nav-link">Contact</a></li>
  </ul>
  
    </div>
    </div>
  )
}

export default SideBar




