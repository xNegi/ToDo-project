import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-slate-800 text-white py-4'>
        <div className="logo font-bold text-2xl">
            <span className='text-xl mx-8 ' ></span>myTodo List
        </div>
        <ul className="flex gap-8 mx-9">
            <li className='cursor-pointer hover:text-blue-400 hover:font-bold'>Home</li>
            <li className='cursor-pointer hover:text-blue-400 hover:font-bold'>Your task</li>
        </ul>

    </nav>
  )
}

export default Navbar
