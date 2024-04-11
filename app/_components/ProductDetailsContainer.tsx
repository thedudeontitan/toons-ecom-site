'use client'
import React, { useEffect, useState } from "react";
import getProduct from "@/app/_libs/getProduct";
import ProductDetails from "@/app/_components/ProductDetails";
import Image from "next/image";

const ProductDetailsContainer = async (props: { id: string }) => {

    const [productData, setProductData] = useState<Product>();
    const [error, setError] = useState<string>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productData: Product = await getProduct(props.id);
                setProductData(productData);
            }
            catch (error) {
                setError("Failed to fetch product data");

            }
        };
        fetchData()
    }, [])

    if (error) {
        return (
            <div className=" min-h-screen bg-[#efe7f7]">
                <div className='relative lg:w-[40vw] lg:h-[40vw] mx-auto'>
                    <Image src="/cat404.png" alt='' fill unoptimized objectFit="contain" />
                </div>
            </div>
        )
    }
    if (productData)
        return <ProductDetails productData={productData} />

}

export default ProductDetailsContainer;