import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

// css
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function IndustryFuture({ title = 'company', heading = 'Enter Title', description = 'Your description will come here', cardsData = [], cardWidth='w-[260px]' }) {
    return (
        <section className='w-full p-4 py-8 md:py-10 bg-grey' >
            <div className='max-w-1200 mx-auto'>
                <div className='flex items-center flex-col mb-10 max-md:mb-5 text-center'>
                    <p data-aos='flip-left' data-aos-delay='100' className='text-black uppercase mb-2 font-medium'>{title}</p>
                    <h2 data-aos='flip-right' data-aos-delay='100' className='md:text-4xl text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary from-30%  to-secondary to-90% mb-2'>{heading}</h2>
                    <p data-aos='flip-left' data-aos-delay='100' className='text-black opacity-70'>{description}</p>
                </div>
            </div>
            {/* View for Desktop */}
            {/* <div className='grid grid-cols-auto-3-250 justify-items-center gap-6 mx-auto max-w-900 p-2 max-md:hidden'> */}
            <div className='flex justify-center items-center flex-wrap gap-6 mx-auto max-w-900 p-2 max-md:hidden'>
                {
                    cardsData.map(({ image, title, description }, ind) => {
                        const even = ind % 2 == 0 || ind == 0;
                        return (
                            <div key={ind} data-aos={even ? 'flip-right' : 'flip-left'} data-aos-delay={ind * 100} className={`rounded-md p-2 border border-secondary/50 ${cardWidth}`}>
                                <Image src={image} width={250} className='w-full aspect-video object-cover rounded-t-md' alt={title} />
                                <div className="rounded-b-md p-4 bg-gradient-to-tl from-primary to-[#24002D] text-white min-h-[260px]">
                                    <h1 className='text-xl mb-2'>{title}</h1>
                                    <p className='opacity-60 mb-4'>{description}</p>
                                </div>
                            </div >
                        )
                    })
                }
            </div>
            {/* Slide Show for Mobile/Tab */}
            <div data-aos='fade-up' className="md:hidden">
                <Swiper slidesPerView={1} loop={true} modules={[Pagination, Autoplay]} className='sideSwiper rounded-md' pagination={{ clickable: true, }} autoplay={{ delay: 10000, disableOnInteraction: false, }} spaceBetween={20} breakpoints={{ 480: { slidesPerView: 2, }, }}>
                    {
                        cardsData.map(({ image, title, description }, ind) => {
                            return (
                                <SwiperSlide key={ind} >
                                    <div className='rounded-md p-2 border border-secondary/50 '>
                                        <Image src={image} width={250} className='w-full aspect-video object-cover rounded-t-md' alt={title} />
                                        <div className="rounded-b-md p-4 bg-gradient-to-tl from-primary to-[#24002D] text-white  min-h-[260px]">
                                            <h1 className='text-xl mb-2'>{title}</h1>
                                            <p className='opacity-60 mb-4'>{description}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </section >
    )
}


