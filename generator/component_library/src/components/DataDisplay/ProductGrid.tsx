import React, { useState, useEffect } from 'react';
import { Card } from '../Layout/Card';
import { Heading } from '../ContentDisplay/Heading';
import { TextBlock } from '../ContentDisplay/TextBlock';
import { Grid } from '../Layout/Grid';

export interface ProductGridProps {
  apiEndpoint?: string;
  title?: string;
  className?: string;
  products?: Array<any>; // 1. Added support for explicitly passed products
  children?: React.ReactNode; // 2. Added support for AI-hardcoded children
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  apiEndpoint = "https://dummyjson.com/products?limit=6",
  title = "Featured Products",
  className = "",
  products: explicitProducts,
  children,
}) => {
  const [fetchedProducts, setFetchedProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // 3. THE SMART FETCH: Only run the fetch if the AI didn't pass explicit products OR manual children
  useEffect(() => {
    if (!children && !explicitProducts) {
      const fetchProducts = async () => {
        setLoading(true);
        try {
          const response = await fetch(apiEndpoint);
          const data = await response.json();
          setFetchedProducts(data.products || []);
        } catch (error) {
          console.error("Failed to fetch products:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchProducts();
    }
  }, [apiEndpoint, children, explicitProducts]);

  // Determine which array to use: the ones passed by props, or the ones we fetched
  const displayProducts = explicitProducts || fetchedProducts;

  return (
    <div className={className}>
      {title && <Heading level={2} className="mb-6">{title}</Heading>}
      
      {/* THE SMART RENDER LOGIC */}
      {children ? (
        /* Scenario A: The AI hardcoded individual cards manually. Let's just wrap them in our Grid. */
        <Grid cols={3} gap="lg">
          {children}
        </Grid>
      ) : loading ? (
        /* Scenario B: We are fetching from the API */
        <TextBlock color="text-gray-500">Loading products...</TextBlock>
      ) : (
        /* Scenario C: Map over either the explicit products or the fetched API products */
        <Grid cols={3} gap="lg">
          {displayProducts.map((product) => (
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