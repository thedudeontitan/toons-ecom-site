"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Product({ product }: { product: Product }) {

    return (
        <div className="flex flex-col bg-[#d3aeff] p-10 rounded-[25px] border-4 border-black font-brice-semibold">
            <Link href={`/products/${product.id}`} style={{ textDecoration: "none" }}>
                <div className="flex flex-col justify-center gap-5">
                    <div className="relative h-52 w-52">
                        <Image
                            src={product.images[0]}
                            alt=""
                            fill
                            unoptimized
                            style={{ objectFit: "cover" }}
                            className=" rounded-[20px] border-black border-4"
                        />
                    </div>
                    <div className="">
                        <div className="flex flex-row justify-between mb-2 items-center">
                            <p className="truncate w-36">{product.title}</p>
                            <p className="text-lg">${product.price}</p>
                        </div>
                        <p className="truncate w-52 font-brice-regular">{product.description}</p>
                    </div>
                </div>
            </Link>
            <button
                className="mt-5 border-4 border-black rounded-[12px] py-2"
            >
                Product Details
            </button>
        </div>
    );
}
