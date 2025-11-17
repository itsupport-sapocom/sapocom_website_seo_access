import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function IndustryCtaWithDetails({ title = 'clients', heading = 'All these to be future ready', description = 'Your description will come here', cta = '/contact-us', industryData }) {
    return (
        <section className='w-full p-4 py-8 md:py-10 max-w-1200 mx-auto grid lg:grid-cols-[1fr_1fr] gap-10 ' >
            <div className='flex flex-col justify-center'>
                <p data-aos='fade-up' data-aos-delay='100' className='text-secondary uppercase mb-4 font-medium'>{title}</p>
                <h2 data-aos='fade-up' data-aos-delay='200' className='text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4 max-w-[550px]'>{heading}</h2>
                <p data-aos='fade-up' data-aos-delay='300' className='text-black mb-4 opacity-70 max-w-[450px]'>{description}</p>
                <Link passHref href={cta} >
                    <button data-aos='fade-up' data-aos-delay='400' className='px-5 py-2 rounded-md text-white bg-gradient-to-r from-primary to-secondary'>Contact Us</button>
                </Link>
            </div>
            <div className='lg:flex lg:justify-end'>
                <div data-aos='fade-up' className="grid grid-cols-auto-4-200 lg:grid-cols-2 gap-4 lg:max-w-[500px] h-full">
                    {
                        industryData.map(({ title, image, description }, ind) => {
                            const even = ind % 2 == 0 || ind == 0;
                            return (
                                    <div key={ind} className={`${even && 'lg:translate-y-6'} select-none p-4 rounded-md aspect-square border border-secondary/20 hover:border-secondary/50 transition-all hover:shadow-detailcard`}>
                                        <Image src={image} alt={title} className='mb-3 w-10 h-10' />
                                        <h1 className='text-xl font-semibold mb-3'>{title}</h1>
                                        <p className="opacity-60 line-clamp-3">{description}</p>
                                    </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}


