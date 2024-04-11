export default async function getProduct(skip: number) {
    try {
        const response = await fetch(`https://dummyjson.com/products?limit=12&skip=${skip}`);
        if (!response.ok) {
            throw new Error('Failed to fetch Products');
        }
        return await response.json() as ProductsResponse;
    } catch (error) {
        console.error('API error:', error);
        throw error; 
    }
}