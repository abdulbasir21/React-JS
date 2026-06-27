import React from 'react'
import Navbar from './Components/Navbar'
import Welcome from './Components/Welcome'
import Services from './Components/Services'
import Creations from './Components/Creations'
import Reviews from './Components/Reviews'
import Connect from './Components/Connect'

function App() {
  return (
    <main className='overflow-x-hidden text-neutral-800'>

<Navbar/>
<Welcome/>
<Services/>
<Creations/>
<Reviews/>
<Connect/>

    </main>
  )
}

export default App