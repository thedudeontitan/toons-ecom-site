'use client'
import React, { useEffect, useState } from 'react'
import getProducts from '../_libs/getProducts';
import Product from './Product';
import Image from 'next/image';

const ProductListing = async ({ skip }: { skip: number }) => {

  const [productsData, setProductsData] = useState<Product[]>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { products } = await getProducts(skip);
        setProductsData(products);
      }
      catch (error) {
        return (
          <div className='relative lg:w-[40vw] lg:h-[40vw] mx-auto'>
            <Image src="/cat404.png" alt='' fill unoptimized />
          </div>
        )
      }
    }
    fetchData()
  }, [])
  
  return (
    <div>
      <div className='flex flex-row flex-wrap gap-10'>
        {productsData?.map((item, index) => (
          <Product key={index} product={item} />
        ))}
      </div>
    </div>
  )
}

export default ProductListing;