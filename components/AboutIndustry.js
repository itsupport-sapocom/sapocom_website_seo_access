import React from 'react'
import Image from 'next/image'
import industryAboutChemical from '@/assets/images/industry/chemical/industryAbout.png'


export default function AboutIndustry({ title = 'company', heading = 'Enter Title', description = 'Your description will come here', keyPoints = ['points', 'points', 'points', 'points'], image = industryAboutChemical }) {
    return (
        <>
            {/* About Sapocom */}
            <section className='w-full p-4 py-8 md:py-10 bg-gradient-to-r from-secondary to-black text-white' >
                <div className='max-w-1200 mx-auto flex gap-10 flex-wrap '>
                    <div className="flex-1">
                        <p data-aos='fade-up' data-aos-delay='100' className='uppercase mb-4 font-medium'>{title}</p>
                        <h2 data-aos='fade-up' data-aos-delay='200' className='text-3xl font-semibold mb-4 max-w-[550px]'>{heading}</h2>
                        <p data-aos='fade-up' data-aos-delay='300' className='mb-10 text-white/60 opacity-60 max-w-[450px]'>{description}</p>
                        <div className='grid grid-cols-2 max-[600px]:grid-cols-1 w-full gap-4 max-w-[800px]'>
                            {
                                keyPoints.map((point, ind) => {
                                    return (
                                        <div key={ind} data-aos='flip-left' data-aos-delay={ind*100} className='flex items-center p-2 px-0'>
                                            <Image alt='check' src={require('../assets/images/icons/check.svg')} className='w-4 h-4 mr-3' />
                                            <p>{point}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div data-aos="zoom-in" data-aos-delay='200' className="max-md:flex max-md:text-center max-md:w-full max-md:justify-center">
                        <Image src={image} width={350} className='w-[400px]' priority alt='industry_about_us_section' />
                    </div>
                </div>
            </section >
        </>
    )
}

