import React from 'react'

const SelectCard = ({image,text}) => {
  return (
    <div className='relative'>
            <img  className="h-full w-full object-cover" src={image} alt="/"/>
            <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                <p className='left-4 bottom-4 text-xl font-bold text-white absolute'>{text}</p>
            </div>
         </div>
  )
}

export default SelectCard