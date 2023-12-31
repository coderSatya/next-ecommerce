"use client";
import React from "react";
import Image from "next/image";
import { calculatePercentage } from "@/helpers";
import FormattedPrice from "./FormattedPrice";
import Rating from "./Rating";
import Link from "next/link";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

import { addToCart } from "../../redux-toolkit/slices/shoppingSlices";
import { Toaster } from "react-hot-toast";
import { Providers } from "../provider";
import store from "@/redux-toolkit/store/store";
const ProductsData = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full rounded-lg overflow-hidden">
      <Toaster />

      <div>
        <Link href={{ pathname: "/product", query: { _id: item._id } }}>
          <div className="w-full h-96 group overflow-hidden relative">
            <Image
              src={item?.image}
              width={500}
              height={500}
              alt="product-img"
              className="w-full h-full object-cover group-hover:scale-110 duration-220 rounded-t-lg"
            />
            {item.isNew && (
              <span className="absolute top-2 right-2 font-medium text-xs py-1 px-3 rounded-full group-hover:bg-orange-600 bg-white group-hover:text-white">
                New Arrival
              </span>
            )}
          </div>
        </Link>
      </div>
      <div className="border-[1px] border-slate-300 border-t-0 px-2 py-4 flex flex-col gap-y-2 bg-white rounded-b-lg">
        <p>{item?.title}</p>

        <div className="flex items-center justify-between">
          <div className="border-[1px] border-orange-600 py-1 px-4 rounded-full text-xs">
            <p>{calculatePercentage(item?.price, item?.oldPrice)}% off</p>
          </div>
          <div className="flex items-center gap-x-2">
            <p className="text-slate-500 line-through text-sm">
              <FormattedPrice amount={item?.oldPrice} />
            </p>
            <p className="font-semibold">
              <FormattedPrice amount={item?.price} />
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={() =>
              dispatch(addToCart(item)) &&
              toast.success(
                `${item?.title.substring(0, 15)} added successfully!`
              )
            }
            className="bg-orange-600 px-4 py-2 text-sm tracking-wide rounded-full text-slate-100 hover:bg-orange-800 hover:text-white duration-200"
          >
            add to cart
          </button>
        </div>

        <Rating star={item?.rating} />
      </div>
    </div>
  );
};

export default ProductsData;
