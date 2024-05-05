import React from 'react'
import 'font-awesome/css/font-awesome.min.css' 
function Header() {
  return (
    <>
    <div className='flex border justify-between w-2/4 m-auto mt-20 p-4 rounded-lg items-center shadow-md text-sky-100 border-sky-500 '>
        <h1 className='font-bold text-2xl font-sans'>Library-Project</h1>
        <p className='font-semibold font-sans p-1 '>The second project by ReactJs</p>
    </div>
    {/* search bar */}
    <div className='flex m-auto bg-sky-300 w-1/4 mt-28 ml-96 justify-between items-center p-3 rounded-2xl shadow-xl'>
    <form action="#">
      <input className='w-72 rounded-2xl bg-sky-300 focus:outline-none text-blue-900 font-sans
       font-semibold ' type="text" placeholder='Search title' />
      <button><i className='fa fa-search text-slate-400 pl-11'></i></button>
    </form>
    </div>
    </>
  )
}

export default Header