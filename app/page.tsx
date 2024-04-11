import Image from 'next/image'
import React, { Suspense } from 'react'
import ProductContainer from './_components/ProductContainer';

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col bg-[#efe7f7] text-black'>
      {/* <div>
        <Image src="/giphy2.gif" alt='' fill style={{objectFit:'contain'}}/>
      </div> */}
      <div className='flex flex-col mx-10 lg:mx-20'>
        <p className='mt-28 lg:mt-40 lg:mx-auto text-center lg:w-[60vw] font-brice-black text-3xl lg:text-7xl'>What would you like to buy today?</p>
        <div className='flex flex-col mx-10 lg:flex-row justify-between mt-10 gap-y-10 '>
          <div className='border-black border-4 lg:w-[16vw] lg:h-[14vw] rounded-[25px] pt-5 px-5 bg-[#d3aeff] font-brice-semibold flex flex-col items-center'>
            <p className='mb-10 lg:text-xl'>Spring Sale: Save Big on Your Favorite Products!</p>
            <div className='relative w-52 h-20 lg:w-80 lg:h-32 '>
              <Image src="/vector_cloud.png" alt='' fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <div className='border-black border-4 lg:w-[20vw] lg:h-[18vw] rounded-[25px] pt-5 px-5 bg-[#fede64] font-brice-semibold flex flex-col items-center'>
            <p className='mb-10 lg:text-2xl'>Spring Sale: Save Big on Your Favorite Products!</p>
            <div className='relative w-52 h-20 lg:w-80 lg:h-32'>
              <Image src="/vector_cloud.png" alt='' fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <div className='border-black border-4 lg:w-[16vw] lg:h-[14vw] rounded-[25px] pt-5 px-5 bg-[#ffffff] font-brice-semibold flex flex-col items-center'>
            <p className='mb-10 lg:text-xl'>Spring Sale: Save Big on Your Favorite Products!</p>
            <div className='relative w-52 h-20 lg:w-80 lg:h-32 '>
              <Image src="/vector_cloud.png" alt='' fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </div>
        <ProductContainer />
    </div>
  )
}
