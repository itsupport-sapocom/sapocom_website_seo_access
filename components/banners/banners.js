import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export function HeaderBanner({ bgImg, heading, para, cta = '/contact-us', btnText = 'Request Consultation' }) {
    return (
        <>
            <section className='w-full pb-20 pt-48 px-4 relative'>
                {/* Black to transparent gradient */}
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t lg:bg-gradient-to-r from-black to-transparent z-10"></div>
                {/* Background Image */}
                <Image src={bgImg} width={1300} alt={`${heading}`} priority className='w-full h-full absolute top-0 left-0 object-cover' />
                {/* Background Image */}
                <div className='max-w-1200 mx-auto grid text-white z-50'>
                    <h1 className="max-w-[650px] mb-3 text-3xl z-40 font-bold">{heading}</h1>
                    <p className=" m-0 max-w-[500px] z-30 mb-8">{para}</p>
                    {btnText && <Link passHref href={cta}>
                        <button className='px-5 py-2 rounded-md text-white bg-gradient-to-r from-primary to-secondary'>{btnText}</button>
                    </Link>}
                </div>
            </section>
        </>
    )
}


export function BannerWithImage({ title, heading, para, img, bgImg }) {
    return (
        <>
            <section className='relative bg-black'>
                <Image src={bgImg} alt='header_with_image_bg_image' className='w-full h-full absolute top-0 left-0 object-cover' />
                <div className='max-w-1200 mx-auto text-white z-50 pt-14 pb-24 md:pb-32 p-4'>
                    <p className="mb-4 z-40 uppercase">{title}</p>
                    <h1 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary  to-white  mb-4 md:text-4xl z-40 font-semibold max-w-[650px]">{heading}</h1>
                    <p className="leading-relaxed z-30 max-w-[550px]">{para}</p>
                </div>
                <div className="absolute rounded-lg max-1200:w-[calc(100vw-40px)] bottom-0 left-1/2 translate-x-[-50%] translate-y-[50%] z-[65] w-[1100px] mx-auto lg:h-48 overflow-hidden">
                    <Image src={img} width={1200} alt='aboutUshomeBanner' className='z-[61] w-full h-auto' />
                </div>
            </section>
        </>
    )
}

export function BannerWithClickHandler({ bgImg, heading, para, clickHandler, btnText = 'View Openings' }) {
    return (
        <section className='w-full pb-20 pt-48 px-4 relative'>
            {/* Black to transparent gradient */}
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t lg:bg-gradient-to-r from-black to-transparent z-10"></div>
            {/* Background Image */}
            <Image src={bgImg} width={1300} alt={`${heading}_header_banner_bg`} priority className='w-full h-full absolute top-0 left-0 object-cover' />
            {/* Text on Background Image */}
            <div className='max-w-1200 mx-auto grid text-white z-50'>
                <h1 className="max-w-[650px] mb-3 text-3xl z-40 font-bold">{heading}</h1>
                <p className=" m-0 max-w-[500px] z-30 mb-8">{para}</p>
                <div>
                    <button onClick={clickHandler} className='px-5 py-2 rounded-md text-white bg-gradient-to-r from-primary to-secondary'>{btnText}</button>
                </div>
            </div>
        </section>);
}