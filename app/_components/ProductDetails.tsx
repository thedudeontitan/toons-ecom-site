"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BsTruck } from "react-icons/bs";
import { IoBagRemoveOutline } from "react-icons/io5";
import StarRating from "./StarRating";

export default function ProductDetails({ productData, }: { productData: Product; }) {

  const [currentImage, setCurrentImage] = useState<number>(0)
  console.log(productData)

  const maxRating = 5;
  const rating = productData.rating;

  return (
    <div className="flex flex-row px-20 min-h-screen bg-[#efe7f7]">
      <div className="flex flex-col mt-20">
        <div className="relative w-[40vw] h-[25vw]">
          <Image
            src={productData.images[currentImage]}
            alt="product image"
            fill
            unoptimized
            style={{ objectFit: "cover" }}
            className="border-4 border-black rounded-[25px]"
          />
        </div>
        <div className="flex flex-row gap-4 w-[40vw] justify-between mt-10">
          {productData.images.map((item, index) => (
            <div onClick={() => setCurrentImage(index)} className="relative h-24 w-32">
              <Image
                src={item}
                alt="product image"
                fill
                unoptimized
                style={{ objectFit: "cover" }}
                className="border-4 border-black rounded-[18px]"
              />
            </div>
          ))}

        </div>
      </div>
      <div className="mt-12 p-10 font-brice-black flex flex-col gap-5">
        <div>
          <p className="text-4xl">{productData.title}</p>
          <p className="flex flex-row "><span>{productData.brand}</span></p>
        </div>
        <p className="flex flex-row items-center font-brice-regular">
          <StarRating maxRating={maxRating} rating={rating} />
          <span>{productData.rating}</span>
        </p>
        <p className="text-lg font-brice-semibold">{productData.description}</p>
        <p className="font-brice-semibold">Category: {productData.category}</p>
        
        {
          productData.discountPercentage > 0 ?
            <p className="text-3xl flex flex-col">
              <span className="text-red-600">${(productData.price - (productData.price * productData.discountPercentage / 100)).toFixed(2)}</span>
              <span className="line-through text-xl">MRP:${productData.price}</span>
            </p> :
            <p className="text-3xl"><span className="line-through">${productData.price}</span></p>
        }

        <div className="flex flex-row w-[30vw] gap-10">
          <button className="border-4 border-black bg-[#d3aeff] px-4 py-2 rounded-[12px] flex-grow">Add To Cart</button>
          <button className="border-4 border-black bg-[#d3aeff] px-4 py-2 rounded-[12px] flex-grow">Buy Now</button>
        </div>
        <hr className="" />
        <div className="border-4 border-black bg-[#fede64] py-4 flex flex-col rounded-[14px] font-brice-semibold">
          <div className="flex flex-row gap-2 border-b-2 border-black px-4 pb-2">
            <BsTruck size={20} color="#49cdc1" />
            <p className="">
              <span>Free Delivery</span>
              <span>Delivering all over the world</span>
            </p>
          </div>
          <div className="flex flex-row gap-2 border-t-2 border-black px-4 pt-2">
            <IoBagRemoveOutline size={20} color="#49cdc1" />
            <p className="">
              <span>Easy Returns</span>
              <span>Free 30 days return</span>
            </p>
          </div>
        </div>
      </div>
    </div >
  );
}
