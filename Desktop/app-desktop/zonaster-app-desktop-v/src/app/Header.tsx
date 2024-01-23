'use client'
import React, { useState } from 'react'



function Header() {

  const [search,setSearch]= useState('')

const handleSearch =(e:any)=>{
setSearch(e.target.value )

}

console.log(search)


  return (
    <div className='header'>
<header>
    <p className='para'>hey there</p>
    <h1>Explore the Zonaster Events App</h1>
    <input type='search'placeholder='search' onChange={handleSearch}/>
    <button className='btn'>search</button>
</header>


    </div>
  )
}

export default Header