"use client";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import Logo from "./Logo";
import { BsCart } from "react-icons/bs";
import {useSelector} from 'react-redux'

import { RiSearch2Line } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { IoMdCart } from "react-icons/io";
import { deleteUser } from "@/redux-toolkit/slices/shoppingSlices";

import FormattedPrice from "./FormattedPrice";
import { useDispatch } from "react-redux";
import Link from "next/link";
const Header = () => {
  const [totalAmt, setTotalAmt] = useState(0);
  const { productData } = useSelector((state) => state.shopping);
const dispatch = useDispatch()
  const {userInfo} = useSelector((state)=>state.shopping)


  useEffect(() => {
    let Amt = 0;
    productData.map((item) => {
      Amt = Amt + item.price * item.quantity;
      // return;
    });
    setTotalAmt(Amt);
  }, [productData]);

  return (
    <div className="bg-bodyColor h-20 top-0 sticky z-50">
      <Container className="h-full flex items-center md:gap-x-5 justify-between md:justify-start">
        <Logo />
        <div className="w-full bg-white hidden md:flex items-center gap-x-1 border-[1px] border-lightText/50 rounded-full px-4 py-1.5 focud-within:border-orange-600 group">
          <RiSearch2Line className="text-gray-500 group-focus-within:text-darkText duratiom-200" />
          <input
            type="text"
            placeholder="search for products"
            className="placeholder:text-sm flex-1 outline:none"
          />
        </div>
        <Link href="/auth/sign-up">
          <div className="bg-bgLight text-gray-500 flex items-center justify-center p-1.5 rounded-full hover:bg-white border-[1px] border-gray-200 hover:border-orange-500">
          <AiOutlineUser className="text-2xl" />
        {userInfo ?(
        
            <h4 className="flex justify-normal">{userInfo.username}</h4> 
           
          
        ) : <button className="text-sm font-semibold">Login/Register</button>}  
        </div>
        </Link>
        <Link href="/cart">
        <div className="bg-black hover:bg-slate-950 rounded-full text-slate-100 hover:text-white flex items-center justify-center gap-x-1 px-3 py-1.5 border-[1px] border-black hover:border-orange-600 duration-200 relative">
          <IoMdCart className="text-2xl" />
          <p className="text-sm font-semibold"><FormattedPrice amount={totalAmt ? totalAmt : 0} /> </p>
          <span className="bg-white text-orange-600 rounded-full text-xs font-semibold absolute -right-2 -top-1 w-5 h-5 flex items-center justify-center shadow-xl shadow-black">
            {productData ? productData?.length : 0}
          </span>
        </div>
        </Link>
      {userInfo &&  <button onClick={()=>dispatch(deleteUser())}>Logout</button>}
      </Container>
    </div>
  );
};

export default Header;
