import React from "react";

function Liked({ data: { title, image } }) {
  return (
    <>
   
        <div className="border  w-52 h-52 m-auto mb-2 border-1 border-sky-400 shadow-2xl rounded-3xl">
      
          <div className="flex justify-center mt-2 ">
            <img src={image} alt={title} />
          </div>
          <h1 className="flex justify-center ">{title}</h1>
        </div>
       
      
    </>
  );
}

export default Liked;
