import React from 'react'
import popular from '@/popular'

function popularEvents() {
const time = new Date().getMinutes();


  const pop = popular.map(po=>{
    return(
      <div>
<img height='200px'width='300px' src={po.img}/>
<h4>time Remaining:{time} mins</h4>
<h3>{po.title}</h3>
<p>Venue:{po.venue}</p>


      </div>
    )
  })
  
  return (

    <div className='suggested'>
      <h2>Popular Events</h2>
      
    <div className='sugs'>

{pop}
        

    </div>
    </div>
  )
}

export default popularEvents