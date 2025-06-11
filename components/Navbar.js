import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between p-10 rounded-4xl m-8">
        <div>
          JudgeTunes
        </div>
        <div>
          <ul className="flex gap-8">
            <li>HOME </li>
            <li>CONTACT</li>
          </ul>
        </div>


      </nav>
  )
}

export default Navbar
