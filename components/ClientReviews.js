import React from 'react'
import Image from 'next/image'
import map from '@/assets/images/industry/map.png'
import doubleQuote from '../assets/images/icons/double-quote.svg'


export default function ClientReviews({ message = 'We have been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences! and these positives lead to our growth xperiences! and these positives lead to our growth  and these positives lead to our growth', name = 'Vladimir Soloviev',
position = 'Executive Director at PWC', image }) {
  return (
    <>
      <section className='w-full p-4 py-10 bg-black' >
        <div className='max-w-1200 mx-auto flex gap-10 max-md:flex-col'>
          <div className="flex-1">
            <h2 data-aos='fade-up' data-aos-delay='200' className='text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 mb-8 max-w-[550px]'>What our clients say</h2>
            <Image data-aos='fade-up' data-aos-delay='300' src={map} alt='world_map_reviews' width={500} className='w-full max-w-[600px] object-contain mx-auto' />
          </div>

          <div data-aos="zoom-in" data-aos-delay='200' className="flex-initial ">
            <div className='bg-gradient-to-br from-primary to-secondary text-white max-w-[400px] max-md:mx-auto'>
              <div className='p-4'>
                <Image src={doubleQuote} className='w-6 h-6 mb-4' alt='double_quote_client_reviews' />
                <p className='text-base italic'>{message}</p>
              </div>
              <div className='p-4 bg-black grid grid-cols-[40px_1fr] gap-4'>
                <Image src={image} width={50} alt='client-review-image' className='rounded-full w-10 h-10 bg-white' />
                <div>
                  <h1>{name}</h1>
                  <p className='text-sm opacity-60'>{position}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

