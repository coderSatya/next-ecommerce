"use client";
import React from "react";
import Image from "next/image";

const ProductsData = ({ item }) => {
  console.log(item, "111");
  return (
    <div className="w-full rounded-lg overflow-hidden">
      <div>
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
      </div>
      <p>{item?.title}</p>
    </div>
  );
};

export default ProductsData;
