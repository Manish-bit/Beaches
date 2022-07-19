import React from 'react'
import BoraBora from '../assets/borabora.jpg'
import BoraBora2 from '../assets/borabora2.jpg'
import Maldives from '../assets/maldives.jpg'
import Maldives2 from '../assets/maldives2.jpg'
import Maldives3 from '../assets/maldives3.jpg'
import KeyWest from '../assets/keywest.jpg'
import SelectCard from './SelectCard'
const imageArray =[{
    image:`${BoraBora}`,
    text:"BoraBora"
},
{
    image:`${BoraBora2}`,
    text:"BoraBora"
},
{
    image:`${Maldives}`,
    text:"Maldives"
},
{
    image:`${Maldives2}`,
    text:"Maldives"
},
{
    image:`${Maldives3}`,
    text:"Maldives"
},
{
    image:`${KeyWest}`,
    text:"KeyWest"
},

]

const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-2 '>
        {
            imageArray.map(arr=>(
                <SelectCard image={arr.image} text={arr.text}/>
            ))
        }
    </div>
  )
}

export default Selects