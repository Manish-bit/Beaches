import React from 'react'
import {RiCustomerService2Fill} from 'react-icons/ri'
import {MdOutlineTravelExplore} from 'react-icons/md'

const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
         <div className='lg:col-span-2 flex flex-col justify-evenly'>
        <div>
            <h2>LUXURY INCLUDED VACATION FOR TWO PEOPLE</h2>
            <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem maiores amet repellendus tempora! Autem repellendus natus corrupti nam rerum distinctio vel quam consequatur illo itaque officiis quae necessitatibus quaerat commodi ratione architecto, at dolore. Corrupti facilis, tenetur labore iusto eius quod. Saepe quaerat, asperiores unde amet architecto repellendus modi qui adipisci, possimus aspernatur labore accusamus ut laboriosam libero sed quasi molestiae maxime, illo debitis. Unde at facere, reprehenderit quam minima magnam similique eum natus? Reprehenderit accusantium quam voluptatum, deserunt optio incidunt deleniti ut unde, dignissimos laboriosam quas repellendus nam explicabo officia quod. Obcaecati ea aut accusantium officiis doloribus quidem repudiandae.</p>
        </div>
        <div className='grid sm:grid-cols-2 gap-8 py-4'>
        <div className='flex flex-col lg:flex-row items-center text-center'><button><RiCustomerService2Fill size={50}/></button>
        <div>
            <h2 className='py-2'>LEADING SERVICE</h2>
            <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN A ROW</p>
        </div>
        </div>
        <div className='flex flex-col lg:flex-row items-center text-center'><button><MdOutlineTravelExplore size={50}/></button>
        <div>
            <h2 className='py-2'>LEADING SERVICE</h2>
            <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN A ROW</p>
        </div>
        </div>
         </div> 
    </div>
    <div>
        <div className='border text-center'>
            <p className='pt-2'>GET AN ADDITIONAL 10% OFF</p>
            <p className='py-4'>12 HOURS LEFT</p>
            <p className='bg-gray-800 text-gray-200 py-2'>BOOK NOW AND SAVE</p>
        </div>
        <form className='w-full'>
            <div className='flex flex-col my-2'>
                <label>Destination</label>
                <select className='border rounder-md p-2' >
                    <option>Kathmandu</option>
                    <option>Pokhara</option>
                    <option>Annapurna</option>
                    <option>Solukhumbu</option>
                    <option>Darjeeling</option>
                </select>
            </div>
            <div className='flex flex-col my-4'>
                <label>Check-In</label>
                <input type="date" className='border rounder-md p-2'/>
            </div>
            <div className='flex flex-col my-2'>
                <label>Check-Out</label>
                <input type="date" className='border rounder-md p-2'/>
            </div>
            <button className='w-full my-4'>Rates & Availabilities</button>
        </form>
    </div>
    </div>
  )
}

export default Search