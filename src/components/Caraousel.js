import React,{useState} from 'react'
import BoraBora2 from '../assets/borabora2.jpg'
import Maldives from '../assets/maldives.jpg'
import Maldives2 from '../assets/maldives2.jpg'
import {BsArrowLeftSquareFill,BsArrowRightSquareFill} from 'react-icons/bs'
const sliderData = [
    {
        url:`${Maldives}`
    },
    {
        url:`${Maldives2}`
    },
    {
        url:`${BoraBora2}`
    },
]

const Caraousel = () => {
    const[slide,setSlide] = useState(0)
    const length = sliderData.length

    const prevSlide = ()=>{
        setSlide(slide === length-1? 0 :slide+1)
    }
    const nextSlide = ()=>{
        setSlide(slide === 0 ? length-1 : slide-1)
    }

  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
        <BsArrowLeftSquareFill onClick={prevSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer left-8'/>
        <BsArrowRightSquareFill onClick={nextSlide}className='absolute top-[50%] text-3xl text-white cursor-pointer right-8'/>
        {sliderData.map((items,index)=>(
            <div className={index === slide ? 'opacity-100':'opacity-0'}>
              { index === slide && (<img className='w-full  rounded-md' src={items.url} alt="/"/>)}
            </div>
        ))}
    </div>
  )
}

export default Caraousel