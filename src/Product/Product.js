import React from 'react'
import './Product.css'
import { useStateValue } from '../StateProvider'


function Product({id,title,image,price,rating}) {
  const [{basket,user},dispatch] = useStateValue();
  const addtoCart = ()=>{
    dispatch({
      type:'Add_to_basket',
      item:{
        id:id,
        title:title,
        rating:rating,
        image:image,
        price:price,

      }

    })
  }

  return (
    <div className='Product'>
        <div className='product-info'>
        <p>Awsome book should try one</p>
        <p className='product-price'>
            <small>$</small>
            <strong>500</strong>
        </p>
        <div className='rating'>
        <p>*</p>
        <p>*</p>
        </div>
</div>
        <div>
        <img className='product-image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfjEHUDTI0BOqB6HoUNHuVsnHujrYBKEgRRD6yinHOYw&s'/>
        </div>
        <div>
        <button>Add to Cart</button>
      </div>
    </div>
  )
}

export default Product
