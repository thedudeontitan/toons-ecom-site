'use client'
import React, { useEffect, useState } from 'react'
import getProducts from '../_libs/getProduct';
import Product from './Product';

export default function ProductListing() {

  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [skip, setSkip] = useState<number>(0);
  const [limit, setLimit] = useState<number>(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { products, total, skip, limit } = await getProducts();
        setProducts(products);
        setTotal(total);
        setSkip(skip);
        setLimit(limit);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div className='mt-10 mx-20 border-4 border-black p-10 rounded-[25px]'>
      <p className='font-brice-black text-5xl mb-10'>Products</p>

      <div className='flex flex-row flex-wrap gap-10'>
        {products.map((item) => (
          <Product product={item} />
        ))}
      </div>
    </div>
  )
}
