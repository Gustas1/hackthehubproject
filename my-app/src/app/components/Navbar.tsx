import React from 'react'
import Link from 'next/link'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className = "mt-6 flex justify-between">
        <h1>Project-Name</h1>
        <nav>
            <ul className = "flex gap-x-6">
                <li className = 'hover:border-b-2 border-purple-600'><Link href = "/mic">Demo</Link></li>
                <li className = 'hover:border-b-2 border-purple-600'><Link href = "/edcuation">Education</Link></li>
                <li className = 'hover:border-b-2 border-purple-600'><Link href = "/about">About</Link></li>
                <li>|</li>
                <li className = 'hover:border-b-2 border-purple-600'>Dark mode</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar