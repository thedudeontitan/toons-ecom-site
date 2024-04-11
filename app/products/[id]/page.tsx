import { Suspense } from "react";
import Loading from "./Loading";
import ProductDetailsContainer from "@/app/_components/ProductDetailsContainer";

export default async function Product({ params: { id }, }: { params: { id: string }; }) {
    return (
        <div className="text-black">
            <Suspense fallback={<Loading />}>
                <ProductDetailsContainer id={id} />
            </Suspense>
        </div>
    );
}
