import React from 'react'
import {books} from "../constants/mockData"
import Bookcard from './Bookcard'

function Books() {
  return (
   <>
   {/* for book list */}
   <div className='grid grid-cols-2 px-72 py-9 gap-y-6'>

    {books.map((book)=>(
        <Bookcard key={book.id} data={book}/>
    ))}
   </div>




   {/* for favorite list */}
   <div></div>
   
   
   
   </>
  )
}

export default Books