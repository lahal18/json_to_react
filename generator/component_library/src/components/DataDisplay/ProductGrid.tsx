import React, { useState, useEffect } from 'react';
import { Card } from '../Layout/Card';
import { Heading } from '../ContentDisplay/Heading';
import { TextBlock } from '../ContentDisplay/TextBlock';
import { Grid } from '../Layout/Grid';

export interface ProductGridProps {
  apiEndpoint?: string;
  title?: string;
  className?: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  apiEndpoint = "https://dummyjson.com/products?limit=6", // Free testing products!
  title = "Featured Products",
  className = "",
}) => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(apiEndpoint);
        const data = await response.json();
        // DummyJSON returns products in a "products" array
        setProducts(data.products || []);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [apiEndpoint]);

  return (
    <div className={className}>
      {title && <Heading level={2} className="mb-6">{title}</Heading>}
      
      {loading ? (
        <TextBlock color="text-gray-500">Loading products...</TextBlock>
      ) : (
        <Grid cols={3} gap="lg">
          {products.map((product) => (
            <Card key={product.id} padding="none" hover className="overflow-hidden">
              <img 
                src={product.thumbnail} 
                alt={product.title} 
                className="w-full h-48 object-cover bg-gray-100"
              />
              <div className="p-4">
                <Heading level={4} className="mb-1 truncate">{product.title}</Heading>
                <TextBlock size="sm" color="text-gray-500" className="mb-3 line-clamp-2">
                  {product.description}
                </TextBlock>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xl font-bold text-gray-900">${product.price}</span>
                  <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700">
                    Add to Cart
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </Grid>
      )}
    </div>
  );
};
export default ProductGrid;