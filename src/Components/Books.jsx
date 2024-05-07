import React, { useState } from 'react'
import {books} from "../constants/mockData"
import Bookcard from './Bookcard'
import Liked from './Liked';

function Books() {
  const [liked,setliked] = useState ([]);

const likedHandler =(book , status)=>{
 if(status){
  const newlikedList = liked.filter(i=>i.id !=book.id)
  setliked(newlikedList)
 }
 else {
  setliked(liked=>[...liked,book])
  
 }
}

  return (
   <>
   {/* for book list */}
   <div className='grid grid-cols-2 px-72 py-9 gap-y-6'>

    {books.map((book)=>(
        <Bookcard key={book.id} data={book} likedHandler={likedHandler}/>
    ))}
   </div>




   {/* for favorite list */}
   
    
    {!!liked.length && <div className='border border-1 w-2/6 m-auto ml-80 border-sky-400 '> <h1 className='text-white font-semibold flex p-1 justify-center'>Saved Books</h1> <div>{liked.map(book=> <Liked key={books.id} data={book} />)}</div></div>}

   
   
   
   </>
  )
}

export default Books