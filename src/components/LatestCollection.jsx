import React, { useContext, useEffect, useState } from 'react'
import { shopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const {products} = useContext(shopContext);
    const [latestProducts,setLatestProducts] = useState([]);

    useEffect(()=> {

        setLatestProducts(products.slice(0,10));

    },[products])

   
  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={' COLLECTION'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis praesentium officia recusandae, deleniti corrupti eaque, repudiandae eum facilis voluptas quos, dolore in ratione dolorum unde cupiditate sapiente saepe. Odit architecto doloremque repudiandae expedita tempore deleniti suscipit qui perferendis quisquam, magni quo unde asperiores, explicabo corrupti. Fugiat libero, sed quidem nobis omnis magni veritatis numquam nemo asperiores laborum dolores maxime consequuntur, quaerat perferendis! Magnam et, error corrupti praesentium dolore voluptatibus amet!
            </p>
        </div>
      {/* Rendering products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>

        {
            latestProducts.map((item,index)=>(
              <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>  
            ))
        }
      </div>
    </div>
  )
}

export default LatestCollection