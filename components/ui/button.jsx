import React from 'react'

const Button = (props) => {
  return (
    <div>
       <button className="shadow-[inset_0_0_0_2px_#616467] text-black px-10 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200 cursor-pointer" type={props.type}>{props.title}</button>
   
    </div>
  )
}

export default Button
