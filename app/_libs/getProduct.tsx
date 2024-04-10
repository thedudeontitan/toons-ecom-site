
export default async function getProduct(id:string){
    console.log('hello')
    const response = await fetch(`https://dummyjson.com/products/${id}`)
    if(!response.ok){
        throw new Error('Failed to fetch Products')
    }
    return await response.json() as Product;
}