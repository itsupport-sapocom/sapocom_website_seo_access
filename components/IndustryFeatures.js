import React from 'react'
import Image from 'next/image'
import industryFeatures from '@/assets/images/industry/industryFeatures.png'

function IndustryFeatures({ title = 'challenges', heading = 'All these to be future ready', description = 'Your description will come here', image = industryFeatures, featuresData }) {
    return (
        <section className='w-full p-4 py-8 md:py-10 max-w-1200 mx-auto border-b border-primary/20' >
            <div className='flex md:gap-10 gap-4 flex-wrap mb-10'>
                <div className="flex-1">
                    <p data-aos='fade-up' data-aos-delay='100' className='text-secondary uppercase mb-4 font-medium'>{title}</p>
                    <h2 data-aos='fade-up' data-aos-delay='200' className='text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary from-30%  to-secondary to-90% mb-2 max-w-[550px]'>{heading}</h2>
                    <p data-aos='fade-up' data-aos-delay='300' className='text-black mb-4 opacity-70 max-w-[450px]'>{description}</p>
                </div>
                <div data-aos="zoom-in" data-aos-delay='200' className="max-md:flex max-md:text-center max-md:w-full max-md:justify-center md:flex-1">
                    <Image src={image} width={500} priority className='md:w-full h-auto' alt='industry_features_image' />
                </div>
            </div>
            <div className="grid grid-cols-auto-3 gap-5">
                {
                    featuresData.map(({ title, description }, ind) => {
                        return (
                            <div key={ind} data-aos="fade-up" data-aos-delay={ind * 100} className='p-4  hover:shadow-detailcard rounded-md select-none transition-all'>
                                <h1 className='text-2xl text-secondary mb-4 font-semibold '>{title}</h1>
                                <p className='text-black/60'>{description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default IndustryFeatures
