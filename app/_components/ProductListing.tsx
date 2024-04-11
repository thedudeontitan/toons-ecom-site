'use client'
import React, { useEffect, useState } from 'react'
import getProducts from '../_libs/getProducts';
import Product from './Product';

const ProductListing = async ({skip}:{skip:number}) => {


      const { products } = await getProducts(skip);

  return ( 
    <div>
      <div className='flex flex-row flex-wrap gap-10'>
        {products.map((item, index) => (
          <Product key={index} product={item} />
        ))}
      </div>
    </div>
  )
}

export default ProductListing;