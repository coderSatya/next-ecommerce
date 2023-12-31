
// import axios from "axios"
// import { useEffect } from "react"
// useEffect(()=>{

// fetchProducts();

// },[])
// export const fetchProducts = async()=>{
//   await axios.get('https://fakestoreapiserver.reactbd.com/smart').then((res)=>{
//    console.log(res, '00')
//    }).catch((err)=>{
//     console.log(err)
//    })
   
// };


export const getProducts = async()=>{
const res = await fetch('https://fakestoreapiserver.reactbd.com/smart');
if(!res.ok){
  throw new Error("Failed to fetch products");
}
return res.json()
}

export const calculatePercentage = (price, oldPrice)=>{
  return !!parseFloat(price) && !!parseFloat(oldPrice) ? (100 - (oldPrice / price)*100).toFixed(0)
  :0;
};
export const getTrendingProducts = async()=>{
  const res = await fetch('https://fakestoreapiserver.reactbd.com/smarttrending');
  if(!res.ok){
    throw new Error("Failed to fetch products");
  }
  return res.json()
  }