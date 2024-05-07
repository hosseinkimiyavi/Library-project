import React from 'react'
import 'font-awesome/css/font-awesome.min.css' 
import Search from './Search'
function Header({children}) {
  return (
    <>
    <header>
    <div className='flex border justify-between w-2/4 m-auto mt-20 p-4 rounded-lg items-center shadow-md text-sky-100 border-sky-500 '>
        <h1 className='font-bold text-2xl font-sans'>Library-Project</h1>
        <p className='font-semibold font-sans p-1 '>The second project by ReactJs</p>
    </div>
    {/* search bar */}
    
    </header>

    {children}


    <footer className='border flex m-auto w-3/5 p-3 border-2 rounded-full text-sky-200 font-sans font-semibold items-center justify-center shadow-xl mt-80'>
      <h1>Developed by Hossein Kimiyavi</h1>
    </footer>
    </>
  )
}

export default Header