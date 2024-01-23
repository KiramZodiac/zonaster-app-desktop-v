import Image from 'next/image'
import Header from './Header'
import SideBar from './SideBar'
import Happening from './Happening'
import PopularEvents from './popularEvents'


export default function Home() {
  return (

    <main className="app">


      <Header/>
      <div className='two'>
      <Happening/>
      </div>
      <PopularEvents/>
    </main>
  )
}
