'use client'
import React, { useEffect, useState } from 'react'
import getProducts from '../_libs/getProduct';
import Product from './Product';

export default function ProductListing() {

  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [pageSkip, setSkip] = useState<number>(0);
  const [limit, setLimit] = useState<number>(0);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { products, total, skip, limit } = await getProducts(pageSkip);
        setProducts(products);
        setTotal(total);
        setSkip(skip);
        setLimit(limit);
        console.log(skip)
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [pageSkip]);

  const handlePaginationNext = () => (
    setSkip(pageSkip + 12)
  )
  const handlePaginationPrev = () => {
    setSkip(pageSkip - 12)
  }
  return (
    <div id='products' className='mt-10 mx-20 border-4 border-black p-10 rounded-[25px]'>
      <p className='font-brice-black text-5xl mb-10'>Products</p>

      <div className='flex flex-row flex-wrap gap-10'>
        {products.map((item) => (
          <Product product={item} />
        ))}
      </div>
      <div className='flex flex-row items-center gap-5 mt-10'>
        <button onClick={handlePaginationPrev} className='border-4 border-black rounded-[18px] py-2 px-4'>
          Prev
        </button>
        <p>{pageSkip} - {pageSkip + 12}</p>
        <button onClick={() => pageSkip > 0 ? handlePaginationNext : ""} className='border-4 border-black rounded-[18px] py-2 px-4'>
          Next
        </button>
      </div>
    </div>
  )
}
