import React from 'react'
import { MdLogout } from 'react-icons/md'

function Logout() {
  return (
    <>
      <div className="flex justify-center flex-col items-center rounded-lg hover:bg-gray-400 hover:bg-opacity-20 transition-colors duration-200">
        <img
          className="invert h-10 w-10  p-1.5 rounded-lg"
          src="/user.png"
          alt="user"
        />    <div className="flex justify-center">
        <span className="text-xs">User</span>
      </div>
          </div>
   

   
      <div className="cursor-pointer flex flex-col items-center p-2 rounded-lg mt-auto hover:bg-gray-800 transition-colors duration-200">
        <MdLogout size={30} />
        <div className="text-xs pt-1">Logout</div>
      </div>
    </>
  )
}

export default Logout
