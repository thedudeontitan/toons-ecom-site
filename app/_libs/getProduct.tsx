
export default async function getProduct(id:string){
    const response = await fetch(`https://dummyjson.com/products/${id}`)
    if(!response.ok){
        throw new Error('Failed to fetch Products')
    }
    return await response.json() as Product;
}