import React from 'react'
import Navbar from '../components/Navbar'

type Props = {}

const page = (props: Props) => {
  return (
    <main className="antialiased bg-white relative">
      <header className = "container">
        <Navbar />
      </header>  
    </main>  
    )
}

export default page