import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import "slick-carousel/slick/slick.css";
import Footer from "./components/Footer";

import { store } from "../redux-toolkit/store/store";
import Layout from "./components/Layout";
import { Providers } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "shopping_mart",
  description: "Shopping Mart - A place for all",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full bg-main-bg text-darkText">
        <Providers>
          <Header />

          {children}

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
