import React, { useEffect } from "react";
import { Suspense } from "react";
import Loading from "./Loading";
import getProduct from "@/app/_libs/getProduct";
import ProductDetails from "@/app/_components/ProductDetails";

const ProductsContainer = async (props: { id: string }) => {
    const productData: Product = await getProduct(props.id);
    return <ProductDetails productData={productData} />
};

export default async function Product({ params: { id }, }: { params: { id: string }; }) {
    return (
        <div className="text-black">
            <Suspense fallback={<Loading />}>
                <ProductsContainer id={id} />
            </Suspense>
        </div>
    );
}
