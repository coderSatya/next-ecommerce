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
'use client'

import React from "react";
import CartItem from "../components/CartItem";
import ProductsData from "../components/ProductsData";
import Header from "../components/Header";
import SingleProduct from "../components/SingleProduct";
import { useDispatch } from "react-redux";
import { resetCart } from "@/redux-toolkit/slices/shoppingSlices";
import PaymentForm from "../components/PaymentForm";

const CartPage = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">Cart</h2>
      <div className="flex flex-col gap-5">
        <CartItem />
        <div className="flex items-center justify-end mt-2">
          <button onClick={()=>dispatch(resetCart())} className="bg-red-500 text-base font-semibold text-slate-100 py-2 
          px-6 hover:bg-red-700 hover:text-white duration-200 m-5">
            reset cart
          </button>
        </div>
        {/* Payment card */}
        <PaymentForm />
      </div>
    </div>
  );
};

export default CartPage;
