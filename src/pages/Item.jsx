import React, { useEffect, useState } from 'react';
import ItemDetailContainer from '../Component/ItemDetailContainer/ItemDetailContainer';
import axios from 'axios';

const Item = () => {

    const [product, setProduct] = useState({});

useEffect(() =>{
  axios
  .get('https://dummyjson.com/products/1')
  .then((res) => {
    setProduct(res.data);
  })
  .catch((error) => console.log(error));
}, []);

  return <ItemDetailContainer product={product} />
}

export default Item