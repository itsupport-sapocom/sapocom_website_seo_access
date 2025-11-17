import React from 'react'
import Image from 'next/image'
import industrySolution from '@/assets/images/industry/chemical/industrySolution.png'

export default function IndustrySolution({ successPoints=['Intelligent Asset Management'], imageIndustrySuccess=industrySolution }) {
    return (
        <>
            <section className='w-full p-4 py-8 md:py-10 bg-grey' >
                <div className='max-w-800 mx-auto grid max-md:grid-rows-[1fr_300px] md:grid-cols-[1fr_300px] rounded-lg bg-gradient-to-br from-primary to-secondary'>
                    <div className='p-4'>
                        <h2 data-aos='flip-up' className='text-3xl font-semibold text-white mb-4'>Our Solutions</h2>
                        <div className='grid grid-cols-1 w-full'>
                            {
                                successPoints.map((point, ind) => {
                                    return (
                                        <div key={ind} data-aos='flip-left' data-aos-delay={ind * 50} className='flex items-center mb-3  text-white'>
                                            <Image alt='check' src={require('../assets/images/icons/check.svg')} className='w-4 h-4 mr-3' />
                                            <p>{point}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='w-full h-full'>
                        <Image data-aos='fade-in' alt='industry solution' src={imageIndustrySuccess} width={400} className='object-cover w-full h-full rounded-b-lg md:rounded-r-lg' />
                    </div>
                </div>
            </section >
        </>
    )
}


