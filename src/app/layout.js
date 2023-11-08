import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import "slick-carousel/slick/slick.css";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import { store } from "../../redux-toolkit/store/store";
import Layout from "./components/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "shopping_mart",
  description: "Shopping Mart - A place for all",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full bg-main-bg text-darkText">
      
          <Header />
          {children}
          <Footer />
       
      </body>
    </html>
  );
}
