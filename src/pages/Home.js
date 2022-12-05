import React from 'react'
import jcb from '../assets/jcb.png'

function Home() {
    return (
        <div className='mt-20 bg-gradient-to-b from-yellow-400 to-white h-screen w-full p-3 md:flex flex-row'>

            <div className='w-full p-6 mx-2'>
                <div>
                    <img src={jcb} alt='jcb'/>
                </div>
            </div>

            <div className='w-full p-6 mx-2 flex flex-col justify-center align-middle'>
                <h2 className='text-7xl text-center text-black font-bold'>Rent or Lease <span className='text-red-700'>!</span></h2>
                
                <h2 className='text-5xl text-center text-gray-600 font-medium mt-10'>
                    Tools that make your life <span className='text-red-700 italic'>easy</span>
                </h2>
            </div>
            
            
        </div>
    )
}

export default Home