"use client"
import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    
    <footer className="flex justify-between items-center p-10 text-sm rounded-2xl ">
      <div>
        JudgeTines
      </div>

      <div>
        All rights reserved &copy; 2026
      </div>

      <div>
        <ul className='flex gap-10'>
            <Link href="/">Home</Link>
            
        </ul>
      </div>
    </footer>
    
  )
}

export default Footer
