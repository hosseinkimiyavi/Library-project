import React from 'react'
import 'font-awesome/css/font-awesome.min.css' 



function Bookcard({data:{title ,author ,image ,language ,pages}}) {
  return (
    <>
    <div className='border border-2 w-8/12 h-full -mx-20 p-8 border-sky-500 hover:border-none hover:hover:-translate-y-1 hover:scale-110 duration-300 shadow-2xl rounded-xl '>
        <div className='font-semibold font-sans '>
            <h1 className='flex justify-center -mt-6 mb-2 text-white'>{title}</h1>
        </div>
        <div className='justify-center flex'>
            <img src={image} alt={title} />
        </div>
        <div className='flex text-sky-950 font-sans font-medium justify-center mt-1'>
            <h3>{author}</h3>
        </div>
        <div className='flex justify-between font-sans font-medium text-slate-300'>
            <p>{language}</p>
            <p>{pages}Pages</p>
            <button><i className="fa fa-bookmark"></i></button>
        </div>
    </div>
    
    </>
  )
}

export default Bookcard