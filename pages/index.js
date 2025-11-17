import React, { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { CountUp } from 'use-count-up'
import ScrollTrigger from 'react-scroll-trigger';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import SetHeaders from "@/layouts/SetHeaders";
import { slidesData, industryDetails, sapServicesDetails, whyChooseUsData, partnersDetails, reviewData } from "@/configs/config";

// image
import aboutSapocomSection from '@/assets/images/home/about-sapocom-section.png'
import mapWithFlag from '@/assets/images/home/map-with-flags.png'
import mapBg from '@/assets/images/home/map-bg.png'

// css
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Home() {
  const [startAnimation, setStartAnimation] = useState(false)
  return (
    <>
      {/* Header Configs */}
      <SetHeaders title='Sapocom | A SAP based company to provide asap solutions to be at top in this world | Home Page' />

      {/* Header Banner */}
      <section id="Header_Banner">
        <Swiper slidesPerView={1} loop={true} modules={[Pagination, Autoplay]} className="mySwiper" pagination={{ clickable: true, }} autoplay={{ delay: 3000, disableOnInteraction: false, }}>
          {
            slidesData.map((slide, ind) => {
              return (
                <SwiperSlide key={ind}>
                  <div className='flex justify-center items-center flex-col w-full h-full p-4  relative bg-black'>
                    <Image src={slide.image} alt='header_bg_image' priority={true} className='absolute w-full h-full object-cover' fill />
                    <h1 className='max-w-[800px] text-[44px] max-md:text-3xl font-bold leading-tight mb-5 text-transparent bg-clip-text bg-gradient-to-t via-white from-[#f3bfff] to-white'>{slide.heading}</h1>
                    <p className='max-w-[650px] leading-tight text-white mb-4 max-md:text-base'>{slide.para}</p>
                    <div className='flex gap-4 max-[500px]:flex-col'>
                      <Link passHref href={slide.link}>
                        <button className='w-36 px-5 py-1 rounded-md text-white bg-gradient-to-r from-primary to-secondary border border-transparent'>Get Started</button>
                      </Link >
                      <Link passHref href={slide.cta}>
                        <button className='w-36 px-5 py-1 rounded-md text-white bg-transparent border'>Join Us</button>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </section >

      {/* Stats Detail Section */}
      <section data-aos='fade-up' className='w-full p-4 md:py-8 bg-gradient-to-r from-secondary to-third text-white' >
        <div className='max-w-1200 mx-auto'>
          <h1 className='text-center md:text-4xl text-3xl mb-4'>Stats at Glance</h1>
          <ScrollTrigger onEnter={() => setStartAnimation(true)} onExit={() => setStartAnimation(false)}>
            <div className='grid grid-cols-4 gap-4 max-md:grid-cols-2'>
              <div className='text-center p-2'>
                <h2 className='text-3xl font-semibold'><CountUp isCounting={startAnimation} start={1} end={20} />+</h2>
                <p>Clients across Globe</p>
              </div>
              <div className='text-center p-2'>
                <h2 className='text-3xl font-semibold'><CountUp isCounting={startAnimation} start={1} end={50} />+</h2>
                <p>Number of Employees</p>
              </div>
              <div className='text-center p-2'>
                <h2 className='text-3xl font-semibold'><CountUp isCounting={startAnimation} start={1} end={10} />+</h2>
                <p>Global Projects</p>
              </div>
              <div className='text-center p-2'>
                <h2 className='text-3xl font-semibold'><CountUp isCounting={startAnimation} start={1} end={18} />+</h2>
                <p>Total Experience</p>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </section>

      {/* About Sapocom */}
      <section className='w-full p-4 md:py-8 bg-grey' >
        <div className='max-w-1200 mx-auto flex gap-10 flex-wrap '>
          <div className="flex-1">
            <p data-aos='fade-up' data-aos-delay='100' className='text-secondary uppercase mb-4 font-medium'>About</p>
            <h2 data-aos='fade-up' data-aos-delay='200' className='text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary from-30%  to-secondary to-90% mb-4'>SAPOCOM</h2>
            <p data-aos='fade-up' data-aos-delay='300' className='text-black mb-6 opacity-70'>Empowering business organisations to unlock their full potential through SAP digital transformation</p>
            <p data-aos='fade-up' className='text-black mb-6'>Sapocom is an emerging SAP consulting, training, and talent recruitment industry leader. The gateway to unleashing the boundless potential of your business through the captivating realm of SAP digital transformation! </p>
            <div className='grid grid-cols-2 max-[600px]:grid-cols-1 w-full gap-4'>
              <div data-aos='flip-left' className='flex items-center p-2 px-5 rounded-full border border-black/20 text-secondary'>
                <Image alt='check_with_circle_svg' src={require('../assets/images/icons/check-with-circle.svg')} className='w-5 h-5 mr-3' />
                <p>Renowned and reliable enterprise</p>
              </div>
              <div data-aos='flip-left' className='flex items-center p-2 px-5 rounded-full border border-black/20 text-secondary'>
                <Image alt='check_with_circle_svg' src={require('../assets/images/icons/check-with-circle.svg')} className='w-5 h-5 mr-3' />
                <p>Fostering collaborative team approach</p>
              </div>
              <div data-aos='flip-left' className='flex items-center p-2 px-5 rounded-full border border-black/20 text-secondary'>
                <Image alt='check_with_circle_svg' src={require('../assets/images/icons/check-with-circle.svg')} className='w-5 h-5 mr-3' />
                <p>Focus on revolutionizing SAP & IT industry</p>
              </div>
              <div data-aos='flip-left' className='flex items-center p-2 px-5 rounded-full border border-black/20 text-secondary'>
                <Image alt='check_with_circle_svg' src={require('../assets/images/icons/check-with-circle.svg')} className='w-5 h-5 mr-3' />
                <p>Innovative solutions for sustainable growth</p>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in" data-aos-delay='200' className="max-md:flex max-md:text-center max-md:w-full max-md:justify-center">
            <Image src={aboutSapocomSection} width={300} alt='about_sacopom_image' />
          </div>
        </div>
      </section>

      {/* Industry Led Services */}
      <section className='w-full p-4 md:py-8 max-w-1200 mx-auto ' >
        <div className='flex items-center flex-col mb-10 max-md:mb-5 text-center'>
          <p data-aos='flip-left' data-aos-delay='100' className='text-black uppercase mb-2 font-medium'>Industries</p>
          <h2 data-aos='flip-right' data-aos-delay='100' className='md:text-4xl text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary from-30%  to-secondary to-90% mb-2'>Industry Led Services</h2>
          <p data-aos='flip-left' data-aos-delay='100' className='text-black opacity-70'>Our industry-led SAP services are tailored to meet your business needs.</p>
        </div>
        {/* View for Desktop */}
        <div className='grid grid-cols-auto-4 gap-4 justify-items-cente max-md:hidden'>
          {
            industryDetails.map((industry, ind) => {
              return (
                <>
                  <div key={ind} data-aos='fade-up' data-aos-delay={ind * 100} className='rounded-md aspect-[3/4] p-4 bg-primary transition-all relative flex items-end before:content-[""] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-t before:from-black before:to-transparent before:rounded-md  before:opacity-100 before:z-[86] before:transition-all group overflow-hidden'>
                    <Image alt={industry.name} width={300} src={industry.image} priority className='object-cover w-full h-full absolute top-0 left-0 z-[85] rounded-md group-hover:scale-[1.1] transition-[transform]' />
                    <div className='z-[87] select-none'>
                      <h1 className='text-white font-semibold text-2xl md:text-3xl mb-2'>{industry.name}</h1>
                      <p className='text-white/50 mb-2 min-h-[96px]'>{industry.description}</p>
                      <Link href={industry.link} className='text-[#FFAAE3] opacity-60 hover:opacity-100'>Learn More &gt;</Link>
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
        {/* Slide Show for Mobile/Tab */}
        <div data-aos='fade-up' className="md:hidden">
          <Swiper slidesPerView={1} loop={true} modules={[Pagination, Autoplay]} className='sideSwiper rounded-md' pagination={{ clickable: true, }} autoplay={{ delay: 10000, disableOnInteraction: false, }} spaceBetween={20} breakpoints={{ 480: { slidesPerView: 2, }, }}>
            {
              industryDetails.map((industry, ind) => {
                return (
                  <SwiperSlide key={ind} >
                    <div className='rounded-md aspect-[3/4] p-4 bg-primary transition-all relative flex items-end before:content-[""] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-t before:from-black before:to-transparent before:rounded-md  before:opacity-100 before:z-[86] before:transition-all group overflow-hidden'>
                      <Image alt={industry.name} width={300} src={industry.image} priority className='object-cover w-full h-full absolute top-0 left-0 z-[85] rounded-md group-hover:scale-[1.1] transition-[transform]' />
                      <div className='z-[87] select-none'>
                        <h1 className='text-white font-semibold text-2xl md:text-3xl mb-2'>{industry.name}</h1>
                        <p className='text-white/50 mb-2'>{industry.description}</p>
                        <Link href={industry.link} className='text-[#FFAAE3] opacity-60 hover:opacity-100'>Learn More &gt;</Link>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
      </section>

      {/* SAP Services  */}
      <section className='w-full p-4 md:py-8 max-w-1200 mx-auto ' >
        <div className='flex items-center flex-col mb-10 max-md:mb-5 text-center'>
          <p data-aos='flip-left' data-aos-delay='100' className='text-black uppercase mb-2 font-medium'>Services</p>
          <h2 data-aos='flip-right' data-aos-delay='100' className='md:text-4xl text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary from-30%  to-secondary to-90% mb-2'> SAP Services</h2>
          <p data-aos='flip-left' data-aos-delay='100' className='text-black opacity-70 text-center max-w-800'>SAP Implementation: Our expert team ensures a seamless SAP implementation process, customizing the system to fit your business requirements and enabling you to unlock the full potential of SAP&apos;s capabilities.</p>
        </div>
        {/* View for Desktop */}
        <div className='grid grid-cols-auto-3 gap-4 justify-items-center max-md:hidden'>
          {
            sapServicesDetails.map(({ name, description, image, }, ind) => {
              return (
                <div key={ind} data-aos='fade-up' data-aos-delay={ind * 100} className='rounded-md aspect-[14/9]  p-4 bg-primary transition-all relative flex items-end before:content-[""] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-t before:from-black before:to-transparent before:rounded-md  before:opacity-100 before:z-[86] before:transition-all group overflow-hidden'>
                  <Image alt={name} src={image} width={400} className='object-cover w-full h-full absolute top-0 left-0 z-[85] rounded-md group-hover:scale-[1.1] transition-[transform]' />
                  <div className='z-[87] select-none'>
                    <h1 className='text-white font-semibold text-2xl md:text-3xl mb-2'>{name}</h1>
                    <p className='text-white/50 mb-2 text-sm'>{description}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
        {/* Slide Show for Mobile/Tab */}
        <div data-aos='fade-up' className="md:hidden">
          <Swiper slidesPerView={1} loop={true} modules={[Pagination, Autoplay]} className='sideSwiper rounded-md' pagination={{ clickable: true, }} autoplay={{ delay: 10000, disableOnInteraction: false, }} spaceBetween={20} breakpoints={{ 480: { slidesPerView: 2 }, }}>
            {
              sapServicesDetails.map(({ name, description, image, }, ind) => {
                return (
                  <SwiperSlide key={ind} >
                    <div className='rounded-md aspect-[14/9]  p-4 bg-primary transition-all relative flex items-end before:content-[""] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-t before:from-black before:to-transparent before:rounded-md  before:opacity-100 before:z-[86] before:transition-all group overflow-hidden'>
                      <Image alt={name} src={image} width={400} className='object-cover w-full h-full absolute top-0 left-0 z-[85] rounded-md group-hover:scale-[1.1] transition-[transform]' />
                      <div className='z-[87] select-none'>
                        <h1 className='text-white font-semibold text-2xl md:text-3xl mb-2'>{name}</h1>
                        <p className='text-white/50 mb-2 text-sm'>{description}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
      </section>

      {/* Why Chose Us  */}
      <section className='w-full p-4 md:py-8 max-w-1200 mx-auto ' >
        <div className='flex items-center flex-col mb-10 max-md:mb-5 text-center'>
          <p data-aos='flip-left' data-aos-delay='100' className='text-black uppercase mb-2 font-medium'>Why Choose</p>
          <h2 data-aos='flip-right' data-aos-delay='100' className='md:text-4xl text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary from-30%  to-secondary to-90% mb-2'>Why Choose Us as Your SAP Partner</h2>
          <p data-aos='flip-left' data-aos-delay='100' className='text-black opacity-70 text-center max-w-800'>We pride ourselves in providing industry-led SAP services customized to your unique business needs. Our team of experienced SAP professionals is dedicated to delivering exceptional results and unparalleled customer satisfaction, making us the ideal partner for businesses looking to achieve their respective goals and stay ahead of the competition.</p>
        </div>
        {/* View for Desktop */}
        <div className='grid grid-cols-auto-3-250 gap-4 justify-items-center mx-auto max-w-900 max-md:hidden'>
          {
            whyChooseUsData.map(({ name, description, image, }, ind) => {
              const even = ind % 2 == 0 || ind == 0 ? true : false;
              return (
                <div key={ind} data-aos='fade-up' data-aos-delay={ind * 100} className={`${even ? 'bg-white border-primary/10' : 'bg-gradient-to-br from-primary to-secondary border-transparent'} rounded-md border-2 aspect-[3/4] p-4 flex hover:shadow-card overflow-clip`}>
                  <div className={`select-none ${even ? 'text-black' : 'text-white'}`}>
                    <div className={`${!even ? 'bg-white' : 'bg-gradient-to-br from-primary to-secondary '} rounded-md aspect-[1/1] w-20 p-3 flex mb-8`}>
                      <Image src={image} alt={name} />
                    </div>
                    <h1 className='font-semibold text-2xl mb-2'>{name}</h1>
                    <p className='opacity-60 mb-2'>{description}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
        {/* Slide Show for Mobile/Tab */}
        <div data-aos='fade-up' className="md:hidden">
          <Swiper slidesPerView={1} loop={true} modules={[Pagination, Autoplay]} className='sideSwiper rounded-md' pagination={{ clickable: true, }} autoplay={{ delay: 10000, disableOnInteraction: false, }} spaceBetween={20} breakpoints={{ 480: { slidesPerView: 2 }, }}>
            {
              whyChooseUsData.map(({ name, description, image, }, ind) => {
                const even = ind % 2 == 0 || ind == 0 ? true : false;
                return (
                  <SwiperSlide key={ind} >
                    <div className={`${even ? 'bg-white border-primary/10' : 'bg-gradient-to-br from-primary to-secondary border-transparent'} rounded-md border-2 aspect-[3/4] p-4 flex hover:shadow-card overflow-clip`}>
                      <div className={`select-none ${even ? 'text-black' : 'text-white'}`}>
                        <div className={`${!even ? 'bg-white' : 'bg-gradient-to-br from-primary to-secondary '} rounded-md aspect-[1/1] w-20 p-3 flex mb-8`}>
                          <Image src={image} alt={name} />
                        </div>
                        <h1 className='font-semibold text-2xl mb-2'>{name}</h1>
                        <p className='opacity-60 mb-2'>{description}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
      </section >

      {/* Our Partners */}
      <section className='w-full p-4 md:py-8 max-w-1200 mx-auto ' >
        <div className='flex items-center flex-col mb-10 max-md:mb-5 text-center'>
          <p data-aos='flip-left' data-aos-delay='100' className='text-black uppercase mb-2 font-medium'>Clients</p>
          <h2 data-aos='flip-right' data-aos-delay='100' className='md:text-4xl text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary from-30%  to-secondary to-90% mb-2'>Partnering with Industry Leaders</h2>
          <p data-aos='flip-left' data-aos-delay='100' className='text-black opacity-70 text-center'>Our partnerships with industry leaders enable us to provide most innovative and cutting-edge SAP solutions</p>
        </div>
        <div className=' flex flex-wrap gap-4 justify-center'>
          {
            partnersDetails.map(({ name, image, }, ind) => {
              return (
                <div key={ind} data-aos='fade-up' data-aos-delay={ind * 100} className='bg-white p-4 max-x-sm:w-[130px] w-[170px] flex justify-center'>
                  <Image src={image} alt={name} className='object-contain w-24 h-12 ' height={40} width={80} />
                </div>
              )
            })
          }
        </div>
      </section >

      {/* Reviews */}
      <section className="w-full p-4 md:py-8 bg-gradient-to-r from-primary to-third text-white relative" >
        <Image src={mapBg} alt='map-with-flag' className='absolute top-0 left-0 w-full h-full md:object-contain object-cover md:p-8 max-md:py-8' />
        <div className="max-w-1200 mx-auto">
          <div className='flex items-center flex-col mb-10 max-md:mb-5 text-center text-white'>
            <p data-aos='flip-left' className='uppercase mb-2 font-medium'>Clients</p>
            <h2 data-aos='flip-up' className='md:text-4xl text-3xl font-semibold mb-2'>Partnering with Industry Leaders</h2>
            <p data-aos='flip-left' className='opacity-70 text-center'>Our partnerships with industry leaders enable us to provide most innovative and cutting-edge SAP solutions</p>
          </div>
          <div className="flex justify-center items-center gap-6 mb-4">
            <div className='max-w-[750px] w-full'>
              <Swiper slidesPerView={1} loop={true} modules={[Pagination, Autoplay]} spaceBetween={50} fadeEffect={true} className="swiperReview rounded-md" pagination={{ clickable: true }} autoplay={{ delay: 2000, disableOnInteraction: false, }} >
                {
                  reviewData.map((data, ind) => {
                    return (
                      <SwiperSlide key={ind} className='select-none'>
                        <div className='grid review:grid-cols-[200px_1fr] max-review:grid-rows-[225px_1fr] rounded-md'>
                          <div>
                            <Image src={data.image} alt={data.name} width={250} className='w-full h-full review:object-cover max-review:object-cover review:rounded-l-lg max-review:rounded-t-lg ' />
                          </div>
                          <div className="bg-white p-4 text-black text-left text-base review:rounded-r-lg max-review:rounded-b-lg">
                            <p className='mb-4 line-clamp-5 h-[120px]'>{data.review}</p>
                            <p className='text-xl font-semibold'>{data.name}</p>
                            <p className='opacity-50 text-base'>{data.position}</p>
                          </div>
                        </div>
                      </SwiperSlide>
                    )
                  })
                }
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* About Sapocom */}
      <section className='w-full p-4 md:py-8 bg-grey' >
        <div className='max-w-1200 mx-auto flex gap-4 flex-wrap '>
          <div className="md:flex-1">
            <p data-aos='fade-up' data-aos-delay='100' className='text-secondary uppercase mb-4 font-medium'>Worldwide</p>
            <h2 data-aos='fade-up' data-aos-delay='200' className='text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary from-30%  to-secondary to-90% mb-4 max-w-[550px]'>With our strong global presence and unwavering commitment to delivering growth-oriented and efficient SAP solutions, SAPOCOM enables businesses worldwide to thrive.</h2>
            <p data-aos='fade-up' data-aos-delay='300' className='text-black mb-6 opacity-70 max-w-[500px]'>We provide local support and expertise to our clients, regardless of location, ensuring they receive the best possible service and results. So, why wait? Join us today for unique SAP solutions.</p>
          </div>
          <div data-aos='zoom-in' data-aos-delay={200} className="flex md:flex-1 max-md:text-center max-md:w-full max-md:justify-center">
            <Image src={mapWithFlag} width={400} alt='about_sacopom_image' className='w-full' />
          </div>
        </div>
      </section>
    </>
  )
}
