
// import React from 'react'
// import CartItem from '../components/CartItem'


// const CartPage = () => {
//   return (
//     <div>
//       <h2 className='text-2xl font-semibold mb-2'>Cart123</h2>
//       <div>
//         <CartItem />
//       </div>
//     </div>
//   )
// }

// export default CartPage


import React from 'react';
import CartItem from '../components/CartItem';
import ProductsData from '../components/ProductsData';
import Header from '../components/Header';
import SingleProduct from '../components/SingleProduct';

const CartPage = () => {

  return (
    <div>
     <h2 className='text-2xl font-semibold mb-2'>Cart123</h2>
     <div>
      <CartItem />
     </div>
    </div>
  )
}

export default CartPage


