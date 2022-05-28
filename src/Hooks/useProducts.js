import { useEffect, useState } from "react";

const useProducts = () => {
    const axios = require('axios').default;
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://gigabite-manufacturer.herokuapp.com/products')
        .then(res => res.json())
        .then(data =>setProducts(data) )
    },[])
return [products, setProducts];
}
export default useProducts;