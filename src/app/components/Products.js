
import React from 'react';
import { getProducts } from '@/helpers';
import ProductsData from './ProductsData';
import Container from './Container';

const Products = async () => {
    const products = await getProducts();
    console.log(products)
    
  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 -mt-10">
      {products.map((item, index)=>{
return <div key={index}>
<ProductsData item={item}/>
</div>
      })}
    </Container>
  )
}

export default Products
