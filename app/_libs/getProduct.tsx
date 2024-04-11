export default async function getProduct(id: string) {
    try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch Products');
        }
        return await response.json() as Product;
    } catch (error) {
        console.error('API error:', error);
        throw error; 
    }
}