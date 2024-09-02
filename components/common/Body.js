import React from 'react'

function Body() {
  return (
    <>
    <div className='w-full bg-slate-200 h-[30vh] rounded m-2 p-5 '>
        <h1 className='text-2xl  font-bold'>Hello welcome to vintage IT academy admin Panel </h1>
        <p>Please contect devloper team for any eror or issu you can observe !</p>
        <p>Please dont Open in mobile screen </p>

    </div>
    <h2 className='m-2 font-bold'> Monthly activity</h2>
  <div className='flex '>
   
    <div className='flex rounded m-2 p-5 bg-slate-200'>
        <div className='w-[70%] font-bold'>Total admisson   </div>
        <div className='text-[4rem]'>49</div>
    </div>
    <div className='flex rounded m-2 p-5 bg-slate-200'>
        <div className='w-[70%] font-bold'>Total inquari  </div>
        <div className='text-[4rem]'>329</div>
    </div>
    <div className='flex rounded m-2 p-5 bg-slate-200'>
        <div className='w-[70%] font-bold'>Panding inquari </div>
        <div className='text-[4rem]'>2</div>
    </div>
    

  </div>
    </>
  )
}

export default Body