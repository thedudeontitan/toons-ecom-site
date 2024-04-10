
export default async function getProducts(){
    const response = await fetch('https://dummyjson.com/products')

    if(!response.ok){
        throw new Error('Failed to fetch Products')
    }
    return await response.json() as ProductsResponse;
}