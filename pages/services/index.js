import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import SetHeaders from '@/layouts/SetHeaders'
import { HeaderBanner } from '@/components/banners/banners'
import serviceBanner from "@/assets/images/bgImages/serviceBanner.png";
import { CtaBanner } from '@/components/banners/ctaBanners';
import ClientReviews from '@/components/ClientReviews';
import IndustryCtaWithDetails from '@/components/IndustryCtaWithDetails';

// Images
import overview from '@/assets/images/service/overview.png'
import solution from '@/assets/images/service/solution.png'
import clientImage from '@/assets/images/industry/clientImage.png'

// Configs
import { industryDetailsData, servicesData, serviceBenefits, serviceProvidedData, serviceSolution } from '@/configs/config';

// css
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from 'next/link';

function Services() {
  return (
    <>
      <SetHeaders title='SAP Industry-Specific Solutions | Expert SAP Consulting' description="Unlock tailored SAP Industry-Specific Solutions with SAPOCOM's global consulting & talent expertise. Transform your business today—request your free quote now!" keywords='SAP Industry-Specific Solutions' canonicalRoute='/services' image='https://sapocomglobal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Foverview.c3075b6b.png&w=750&q=75' />

      <HeaderBanner heading='SAP Industry-Specific Solutions for Global Projects | SAPOCOM Tech' para='Integrated platform for Oil & Gas, Metal & Mining to facilitate digital transformation using SAP business processes for future
sustainability & growth.' bgImg={serviceBanner} />


      {/* Overview */}
      <section className='w-full p-4 py-8 md:py-10 bg-grey' >
        <div className='max-w-1200 mx-auto flex gap-10 flex-wrap '>
          <div className="flex-1">
            <p data-aos='fade-up' data-aos-delay='100' className='text-secondary uppercase mb-4 font-medium'>Overview</p>
            <h2 data-aos='fade-up' data-aos-delay='200' className='text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary from-30%  to-secondary to-90% mb-4 max-w-[550px]'>Empower Your Business Growth with Our Customized Solutions</h2>
            <p data-aos='fade-up' data-aos-delay='300' className='text-black mb-8 opacity-70 max-w-[450px]'>We offer a complete range of services, from implementation to ongoing support, to help you harness the full power of our solutions and meet your unique business needs.</p>
            <div className='grid grid-cols-2 max-[600px]:grid-cols-1 w-full gap-4 max-w-[700px]'>
              <div data-aos='flip-left' className='flex items-center text-black'>
                <Image alt='check_black_svg' src={require('../../assets/images/icons/check-black.svg')} className='w-4 h-4 mr-3' />
                <p>Dedicated suite of services</p>
              </div>
              <div data-aos='flip-left' className='flex items-center text-black'>
                <Image alt='check_black_svg' src={require('../../assets/images/icons/check-black.svg')} className='w-4 h-4 mr-3' />
                <p>Industry-leading software solutions</p>
              </div>
              <div data-aos='flip-left' className='flex items-center text-black'>
                <Image alt='check_black_svg' src={require('../../assets/images/icons/check-black.svg')} className='w-4 h-4 mr-3' />
                <p>Global network of experts</p>
              </div>
              <div data-aos='flip-left' className='flex items-center text-black'>
                <Image alt='check_black_svg' src={require('../../assets/images/icons/check-black.svg')} className='w-4 h-4 mr-3' />
                <p>Customized services to business demands</p>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in" data-aos-delay='200' className="max-md:flex max-md:text-center max-md:w-full max-md:justify-center">
            <Image src={overview} width={350} alt='overview' />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className='w-full p-4 py-8 md:py-10 bg-gradient-to-r from-[#641977] via-[#390D44] to-[#0D0110] text-white'>
        <div className='max-w-1200 mx-auto'>
          {/* Heading */}
          <div className="flex items-center flex-col mb-10 max-md:mb-5 text-center">
            <p data-aos="flip-left" data-aos-delay="100" className="uppercase mb-4 font-medium ">SERVICES</p>
            <h2 data-aos="flip-right" data-aos-delay="100" className="md:text-4xl text-3xl font-semibold text-white mb-4 max-w-1000">Empower Your Business with the Best-in-Class SAP Technologies for Future-Proof Growth</h2>
            <p data-aos="flip-left" data-aos-delay="100" className="opacity-70 max-w-[900px]">With global collaborations, we work with clients worldwide in most SAP modules to leverage and diversify our project experience. We are determined to establish our organization and develop a unique community of SAP and IT professionals that will contribute significantly to global SAP projects</p>
          </div>
          {/* Cards */}
          {/* View on Desktop */}
          <div className="max-w-1000 mx-auto grid grid-cols-auto-3-280 gap-4 md:gap-8 justify-items-center max-md:hidden">
            {
              servicesData.map(({ title, image, points, slug = '' }, ind) => {
                const even = ind % 2 == 0 || ind == 0 ? true : false;
                return (
                  <Link href={`/services/${slug}`} key={ind} data-aos={even ? "flip-right" : "flip-left"} data-aos-delay={ind * 100} className='bg-secondary rounded-lg'>
                    <div className='w-full h-auto'>
                      <Image src={image} width={350} alt='service_images' className='rounded-t-lg w-full h-auto' priority />
                    </div>
                    <div className="p-4">
                      <h3 className='mb-4 text-2xl font-semibold'>{title}</h3>
                      <ul className="opacity-60 list-outside pl-3">
                        {
                          points.map((point, ind) => {
                            return (
                              <li key={ind} className='mb-3 list-disc'>{point}</li>
                            )
                          })
                        }
                      </ul>
                    </div>
                  </Link>
                )
              })
            }
          </div>
          {/* Slide Show for Mobile/Tab */}
          <div data-aos='fade-up' className="md:hidden">
            <Swiper slidesPerView={1} loop={true} modules={[Pagination, Autoplay]} className='sideSwiper bgDark rounded-md ' pagination={{ clickable: true, }} autoplay={{ delay: 10000, disableOnInteraction: false, }} spaceBetween={20} breakpoints={{ 480: { slidesPerView: 2 }, }}>
              {
                servicesData.map(({ title, points, image, }, ind) => {
                  return (
                    <SwiperSlide key={ind}>
                      <div className='bg-secondary rounded-lg'>
                        <div className='w-full h-auto'>
                          <Image src={image} width={350} alt='service_images' className='rounded-t-lg w-full h-auto' priority />
                        </div>
                        <div className="p-4 min-h-[512px]">
                          <h3 className='mb-4 text-2xl font-semibold'>{title}</h3>
                          <ul className="opacity-60 list-outside pl-3">
                            {
                              points.map((point, ind) => {
                                return (
                                  <li key={ind} className='mb-3 list-disc'>{point}</li>
                                )
                              })
                            }
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className='w-full p-4 py-8 md:py-10 ' >
        <div className='max-w-900 mx-auto grid max-md:grid-rows-[1fr_300px] md:grid-cols-[1fr_300px] rounded-lg bg-grey p-4 md:p-6 text-black gap-4'>
          <div>
            <h2 data-aos='flip-up' className='text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary from-30%  to-secondary to-90% mb-4 md:mb-8 max-w-[550px]'>Revolutionize Your Business Operations with SAPOCOM&apos; s SAP Services</h2>
            <div className='grid grid-cols-1 w-full'>
              {
                serviceSolution.map((point, ind) => {
                  return (
                    <div key={ind} data-aos='flip-left' data-aos-delay={ind * 50} className='flex items-center mb-3 '>
                      <Image alt='right_arrow' src={require('../../assets/images/icons/right-arrow.svg')} className='w-4 h-4 mr-3' />
                      <p className='text-secondary'>{point}</p>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className='w-full h-full'>
            <Image data-aos='fade-in' alt='service_solution' src={solution} width={400} className='object-contain w-full h-full rounded-md ' />
          </div>
        </div>
      </section >

      {/* Services details  */}
      <section className='w-full p-4 md:py-8 max-w-1200 mx-auto' >
        <div className='flex items-center flex-col mb-10 max-md:mb-5 text-center'>
          <p data-aos='flip-left' data-aos-delay='100' className='text-black uppercase mb-2 font-medium'>Detail</p>
          <h2 data-aos='flip-right' data-aos-delay='100' className='md:text-4xl text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary from-30%  to-secondary to-90% mb-2'>All that we offer in these services</h2>
          <p data-aos='flip-left' data-aos-delay='100' className='text-black opacity-70 text-center'>Here you can have a short description of some digital technologies </p>
        </div>
        {/* View for Desktop */}
        <div className='max-w-1000 mx-auto grid grid-cols-auto-3 gap-4 md:gap-8 justify-items-center max-md:hidden'>
          {
            serviceProvidedData.map(({ title, icon, points }, ind) => {
              return (
                <div key={ind} data-aos='fade-up' data-aos-delay={ind * 100} className='w-full h-full  text-secondary'>
                  <div className="rounded-lg bg-grey p-3 flex items-center mb-2">
                    <div className='p-2 rounded-md bg-white w-12 h-12 mr-2 md:mr-4 grid place-items-center'>
                      <Image src={icon} alt='service_icons' />
                    </div>
                    <p className='font-semibold text-xl'>{title}</p>
                  </div>
                  <div className="border-black/10 border-2 rounded-lg p-3 min-h-[292px]">
                    {
                      points.map((point, ind) => {
                        return (
                          <div key={ind} className='mb-3 flex items-center'>
                            <Image src={require('../../assets/images/icons/check-dark-purple.svg')} className='w-3 h-3 mr-3' alt='check_icon' />
                            <p>{point}</p>
                          </div>
                        )
                      })
                    }
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
              serviceProvidedData.map(({ title, icon, points }, ind) => {
                return (
                  <SwiperSlide key={ind} >
                    <div className='w-full h-full'>
                      <div className="rounded-lg bg-grey p-3 flex items-center mb-2">
                        <div className='p-2 rounded-md bg-white w-12 h-12 mr-2 md:mr-4 grid place-items-center'>
                          <Image src={icon} alt='service_icons' />
                        </div>
                        <p className='text-secondary font-semibold text-xl'>{title}</p>
                      </div>
                      <div className="border-black/10 border-2 rounded-lg p-3 min-h-[268px]">
                        {
                          points.map((point, ind) => {
                            return (
                              <div key={ind} className='mb-3 flex items-center'>
                                <Image src={require('../../assets/images/icons/check-dark-purple.svg')} className='w-3 h-3 mr-3' alt='check_icon' />
                                <p>{point}</p>
                              </div>
                            )
                          })
                        }
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
      </section>

      <IndustryCtaWithDetails
        title='BENEFITS'
        heading='We give the best solutions to help business revenues skyrocket further!'
        description='Our commitment to quality and client satisfaction is what makes us stand out among the crow'
        cta='/contact-us'
        industryData={industryDetailsData}
      />

      {/* Benefits */}
      <section className='w-full p-4 py-8 md:py-10 bg-gradient-to-r from-primary to-secondary text-white'>
        <div className='max-w-1200 mx-auto'>
          <p data-aos='fade-up' data-aos-delay='100' className='text-white uppercase mb-4 font-medium'>Advantages</p>
          <h2 data-aos='fade-up' data-aos-delay='200' className='text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 mb-8'>Advantages in working with SAPOCOM</h2>
          {/* Desktop View card */}
          <div className="max-w-1000 mx-auto grid grid-cols-auto-3 gap-4 md:gap-8 justify-items-center max-md:hidden">
            {
              serviceBenefits.map(({ title, description, image }, ind) => {
                const even = ind % 2 == 0 || ind == 0 ? true : false;
                return (
                  <>
                    <div key={ind} data-aos={even ? "flip-right" : "flip-left"} data-aos-delay={ind * 100} className='bg-white text-black rounded-lg'>
                      <div className='w-full h-auto'>
                        <Image src={image} width={350} alt='service_images' className='aspect-video object-cover rounded-t-lg w-full h-auto' priority />
                      </div>
                      <div className="p-4">
                        <h3 className='mb-3 text-xl font-semibold'>{title}</h3>
                        <p className="line-clamp-[11]">{description}</p>
                      </div>
                    </div>
                  </>
                )
              })
            }
          </div>
          {/* Slide Show for Mobile/Tab */}
          <div data-aos='fade-up' className="md:hidden">
            <Swiper slidesPerView={1} loop={true} modules={[Pagination, Autoplay]} className='sideSwiper bgDark rounded-md ' pagination={{ clickable: true, }} autoplay={{ delay: 10000, disableOnInteraction: false, }} spaceBetween={20} breakpoints={{ 480: { slidesPerView: 2 }, }}>
              {
                serviceBenefits.map(({ title, description, image, }, ind) => {
                  return (
                    <SwiperSlide key={ind}>
                      <div className='bg-white text-black rounded-lg'>
                        <div className='w-full h-auto'>
                          <Image src={image} width={350} alt='service_images' className='aspect-video object-cover rounded-t-lg w-full h-auto' priority />
                        </div>
                        <div className="p-4 min-h-[196px]">
                          <h3 className='mb-3 text-xl font-semibold'>{title}</h3>
                          <p className="line-clamp-[11]">{description}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
          </div>
        </div>
      </section>

      <CtaBanner />

      <ClientReviews
        message='We have been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences! and these positives lead to our growth xperiences! and these positives lead to our growth  and these positives lead to our growth'
        name='Vladimir Soloviev'
        position='Executive Director at PWC'
        image={clientImage}
      />
    </>
  )
}

export default Services
