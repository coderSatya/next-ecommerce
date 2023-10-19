import React from "react";
import Container from "./components/Container";
import Link from "next/link";

const NotFound = () => {
  return (
    <Container className="flex items-center justify-center py-20">
      <div className="max-w-2xl min-h-[500px] flex flex-col items-center justify-center gap-y-5">
        <h2 className="text-4xl font-bold">Your Pages not found</h2>
        <p className="text-base font-medium text-center">
          OOps! The page you are looking for does not exist. It have been moved
          or deleted
        </p>
        <Link
          href="/"
          className="bg-black text-slate-100 w-44 h-12 rounded-full text-base font-semibold hover:bg-orange-500
   hover:text-white duration-200 flex items-center justify-center"
        >
          Back to Home
        </Link>
      </div>
    </Container>
  );
};

export default NotFound;
