import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={' US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate distinctio magnam ea porro eligendi pariatur omnis cumque facere adipisci praesentium. Dicta odio pariatur debitis exercitationem distinctio nisi, adipisci, deleniti incidunt quos quisquam, nam cumque natus!</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa optio, provident ipsum dolor ratione consequatur rem perferendis, et quam molestias velit nam delectus impedit voluptatum, eligendi temporibus facere maxime explicabo quis eius error officia. Voluptate!</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dicta recusandae at culpa libero ipsa odio, sequi fugit, quidem ad ullam pariatur, magnam maxime. Quibusdam dolor deserunt nulla quisquam inventore libero nam repellendus nostrum itaque?</p>
        </div>

      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={' CHOOSE US'}/>

      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our strigent quality standards</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, shoping in this part of the world made easy</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum placeat eos eius alias facilis qui odio obcaecati minima tempore adipisci!</p>
        </div>

      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About
