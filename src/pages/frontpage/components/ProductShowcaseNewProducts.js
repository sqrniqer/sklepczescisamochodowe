import React, {useEffect, useState } from 'react';
import axios from 'axios'
import Productbox from './Productbox'

function ProductShowcaseNewProducts() {
    const [product, setProducts] = useState([])
    useEffect(()=>{
      // axios.get('https://apisklepnodejs.herokuapp.com/api/chemistry')
      axios.get('https://apisklepnodejs.herokuapp.com/api/chemistry')
      .then(res => {
        console.log(res)
        setProducts(res.data)
      })
    })
    return(
      <div>
        <ul style={{
            display: 'flex'
        }}>
          {
            product.map(product => <Productbox 
            catalogNumber={product.catalogNumber} 
            photo_path={product.photo_path} 
            Name={product.Name}
            manufacturer={product.manufacturer}
            bruttoPrice={product.price_settings.bruttoPrice}
            />)
          }
        </ul>
      </div>
    )
}
export default ProductShowcaseNewProducts