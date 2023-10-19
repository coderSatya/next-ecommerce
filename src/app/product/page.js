// // "use client"
// import React from 'react'
// import axios from 'axios'
// import { getTrendingProducts } from '@/helpers'
// import { Container } from 'postcss'

// const ProductPage = ({searchParams}) => {
// //     const [isData, setData] = useState([])
// //     useEffect(()=>{
// // const fetchProducts = ()=>{
// // axios.get('https://fakestoreapiserver.reactbd.com/smart')
// // .then((res)=>{
// // console.log(res.data, 'res');
// // setData(res?.data)
// // }).catch((err)=>{
// //   console.log(err)  
// // })
// // };
// // fetchProducts();
// //     },[]);
 
// //         const ProductDetailItem = isData.find((product)=>product._id == searchParams._id)
// //         console.log(ProductDetailItem, 'ProductDetailItem')
  
// //     console.log(searchParams, 'searchParams');
// //     const data = await getTrendingProducts();
//   return (
//     <div>
//       <Container>
//       <p>Trending Products</p>
   
//       </Container>
//     </div>
//   )
// }

// export default ProductPage
import React from 'react';
import { getTrendingProducts } from '@/helpers';
import Container from '../components/Container';
import ProductsData from '../components/ProductsData';
import SingleProduct from '../components/SingleProduct';
import { getProducts } from '@/helpers';

const ProductPage = async({searchParams}) => {
    const trendingProducts = await getTrendingProducts();
    const allProducts = await getProducts();
   
    const ProductDetailItem = allProducts.find((product)=>product._id == searchParams._id)
     
  return (
    <div>
   <Container>
   <SingleProduct ProductDetailItem={ProductDetailItem}/>
   <p>Trending Products</p>
   <div className='grid grids-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
   {trendingProducts.map((item, index)=>{
return (
    <div key={item?._id}><ProductsData key={item?._id} item={item}/></div>
);
   })}
   </div>
   </Container>
    </div>
  )
}

export default ProductPage
