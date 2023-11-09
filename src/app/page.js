'use client'
import Image from 'next/image'
import Banner from './components/Banner';
import Products from './components/Products';
import { Provider } from 'react-redux';
import { store } from '../redux-toolkit/store/store';


export default function Home() {
  return (
  //  <Provider store={store}>
    <main>
    <Banner/>
    <Products/>
    </main>
    // </Provider>
    
  )
}
