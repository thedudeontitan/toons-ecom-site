'use client'
import { Suspense, useEffect, useState } from "react";
import ProductListing from "./ProductListing";
import Loading from "../Loading";

export default function ProductListContainer() {

    const [pageSkip, setSkip] = useState<number>(0);

    const handlePaginationNext = () => (
        setSkip(pageSkip + 12)
    )
    const handlePaginationPrev = () => {
        setSkip(pageSkip - 12)
    }

    return (
        <div id='products' className='mb-10 flex flex-col items-center lg:items-start mt-20 mx-5 lg:mx-20 border-4 border-black p-4 lg:p-10 rounded-[25px]'>
            <p className='font-brice-black text-5xl mb-10'>Products</p>

            <Suspense fallback={<Loading count={12} />}>
                <ProductListing skip={pageSkip} />
            </Suspense>
            <div className='flex flex-row items-center gap-5 mt-10 mx-auto'>
                <button onClick={handlePaginationPrev} className='border-4 border-black rounded-[18px] py-2 px-4'>
                    Prev
                </button>
                <p>{pageSkip} - {pageSkip + 12}</p>
                <button onClick={handlePaginationNext} className='border-4 border-black rounded-[18px] py-2 px-4'>
                    Next
                </button>
            </div>

        </div>
    )
}