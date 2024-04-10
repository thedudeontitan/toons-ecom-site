import Image from 'next/image'
import React, { Suspense } from 'react'
import ProductListing from './_components/ProductListing'
import Loading from './Loading'
import getProducts from './_libs/getProducts';

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col bg-[#efe7f7]'>
      {/* <div>
        <Image src="/giphy2.gif" alt='' fill style={{objectFit:'contain'}}/>
      </div> */}
      <div className='flex flex-col mx-20'>
        <p className='lg:mt-40 lg:mx-auto text-center lg:w-[60vw] font-brice-black text-7xl'>What would you like to buy today?</p>
        <div className='flex flex-row justify-between mt-10'>
          <div className='border-black border-4 w-[16vw] h-[14vw] rounded-[25px] pt-5 px-5 bg-[#d3aeff] font-brice-semibold flex flex-col items-center'>
            <p className='mb-10 text-xl'>Spring Sale: Save Big on Your Favorite Products!</p>
            <div className='relative w-80 h-32 '>
              <Image src="/vector_cloud.png" alt='' fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <div className='border-black border-4 w-[20vw] h-[18vw] rounded-[25px] pt-5 px-5 bg-[#fede64] font-brice-semibold flex flex-col items-center'>
            <p className='mb-10 text-2xl'>Spring Sale: Save Big on Your Favorite Products!</p>
            <div className='relative w-80 h-32'>
              <Image src="/vector_cloud.png" alt='' fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <div className='border-black border-4 w-[16vw] h-[14vw] rounded-[25px] pt-5 px-5 bg-[#ffffff] font-brice-semibold flex flex-col items-center'>
            <p className='mb-10 text-xl'>Spring Sale: Save Big on Your Favorite Products!</p>
            <div className='relative w-80 h-32 '>
              <Image src="/vector_cloud.png" alt='' fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </div>
      <Suspense fallback={<Loading count={12} />}>
        <ProductListing />
      </Suspense>
    </div>
  )
}
