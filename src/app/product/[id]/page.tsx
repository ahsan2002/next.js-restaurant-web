import Image from 'next/image'
import React from 'react'
import { singleProduct } from '@/data';
import Price from '@/components/Price';

const SingleProductPage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around md:gap-8 md:items-center text-red-500 md:flex-row'>
      {/* image container */}
      <div className=' relative w-full h-1/2 md:h-[70%]'>
      <Image src={singleProduct.img!} alt='' fill className='object-contain' />
      </div>
      {/* text container */}
      <div className='h-1/2 flex gap-4 flex-col md:h-[70%] md:justify-center md:gap-6 xl:gap-8'>
        <h1 className='text-3xl font-bold xl:text-4xl  uppercase'>{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        <Price price={singleProduct.price} id={singleProduct.id} options={singleProduct.options}/>
      </div>
      
    </div>
  )
}

export default SingleProductPage