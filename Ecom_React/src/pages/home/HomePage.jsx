import './HomePage.css'
import axios from 'axios'
import { ProductsGrid } from './ProductsGrid'
import { useState,useEffect } from 'react'
import { Header } from '../../components/Header'
export function HomePage({ cart, loadCartItems }) {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        const GetProduct = async () => {
            const response = await axios.get('/api/products');
            setProducts(response.data);
        }
       
        GetProduct();
    }, [])

    
    return (
        <>
            <title>Ecommerce </title>
           
           <Header cart={ cart } />

            <div className="home-page">
                <ProductsGrid products={ products } loadCartItems={loadCartItems} />
            </div> 
        </>
    );

}