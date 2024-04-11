import Image from 'next/image'
import React from 'react'
import ProductListContainer from './_components/ProductListContainer';

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col bg-[#efe7f7] text-black'>
      {/* <div>
        <Image src="/giphy2.gif" alt='' fill style={{objectFit:'contain'}}/>
      </div> */}
      <div className='flex flex-col mx-10 lg:mx-20'>
        <p className='mt-28 lg:mt-40 lg:mx-auto text-center lg:w-[60vw] font-brice-black text-3xl lg:text-7xl'>What would you like to buy today?</p>
        <div className='flex flex-col mx-10 lg:flex-row justify-between mt-10 gap-y-10 '>
          <div className='overflow-clip border-black border-4 lg:w-[16vw] lg:h-[14vw] rounded-[25px] pt-5 px-5 bg-[#d3aeff] font-brice-semibold flex flex-col items-center'>
            <p className='lg:text-xl'>Over 100+ products to choose from!</p>
            <div className='relative w-52 h-20 lg:w-60 lg:h-40 -mr-36'>
              <Image src="/vector_cloud3.png" alt='' fill style={{ objectFit: 'contain' }} />
            </div>
          </div>
          <div className='overflow-clip border-black border-4 lg:w-[20vw] lg:h-[18vw] rounded-[25px] pt-5 px-5 bg-[#fede64] font-brice-semibold flex flex-col items-center'>
            <p className='mb-10 lg:text-2xl'>Spring Sale: Save Big on Your Favorite Products!</p>
            <div className='relative w-52 h-20 lg:w-80 lg:h-32'>
              <Image src="/vector_cloud.png" alt='' fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <div className='overflow-clip border-black border-4 lg:w-[16vw] lg:h-[14vw] rounded-[25px] pt-5 px-5 bg-[#ffffff] font-brice-semibold flex flex-col items-center'>
            <p className='mb-10 lg:text-xl'>Satisfied over 1000+ customers!</p>
            <div className='relative w-40 h-24 lg:w-40 lg:h-60'>
              <Image src="/vector_cloud2.png" alt='' fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </div>
        <ProductListContainer />
    </div>
  )
}
