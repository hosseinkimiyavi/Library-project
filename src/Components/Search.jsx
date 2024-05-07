import React from 'react'

function Search ({search,setsearch,searchHandler}) {
  return (
    <>
     <div className='flex m-auto bg-sky-300 w-1/4 mt-28 ml-96 justify-between items-center p-3 rounded-2xl shadow-xl'>
    <form action="#">
      <input className='w-72 rounded-2xl bg-sky-300 focus:outline-none text-blue-900 font-sans
       font-semibold ' value={search} onChange={e=>setsearch(e.target.value.toLowerCase())} type="text" placeholder='Search title' />
      <button onClick={searchHandler}><i className='fa fa-search text-slate-400 pl-11'></i></button>
    </form>
    </div>
    </>
  )
}

export default Search