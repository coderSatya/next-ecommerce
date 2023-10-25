import Image from 'next/image'
import Banner from './components/Banner';
import Products from './components/Products';
import { Provider } from 'react-redux';
import { store } from '@/Redux/Store';

export default function Home() {
  return (
   
    <main>
    <Banner/>
    <Products/>
    </main>
    
  )
}
