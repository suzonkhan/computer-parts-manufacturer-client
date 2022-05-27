import { useEffect, useState } from "react";

const useReviews = () => {
    const axios = require('axios').default;
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data =>setReviews(data) )
    },[])
return [reviews, setReviews];
}
export default useReviews;