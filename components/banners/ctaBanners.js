import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import bgImg from '@/assets/images/bgImages/bannerCtaBg.png'
import { useDispatch } from 'react-redux';
import { setContactUsModalState } from '@/store/reducers/valueReducer';

export function CtaBanner({ cta = '/contact-us', heading = 'Want to Learn More about our Services' }) {
    const dispatch = useDispatch();

    function handleModalOpen() {
        dispatch(setContactUsModalState(true))
    }

    return (
        <>
            <section data-aos='zoom-in' className="w-full py-6 px-4 max-review:py-10 relative">
                {/* Black to transparent gradient */}
                <div className="absolute top-0 left-0 h-full w-full bg-secondary/50 z-10"></div>
                {/* Background Image */}
                <Image src={bgImg} width={1300} alt="cta_banner_image" className='w-full h-full absolute top-0 left-0 object-cover' />
                {/* Background Image */}
                <div className='max-w-[800px] mx-auto grid grid-cols-[2fr_1fr] max-review:grid-cols-1 gap-4 text-white z-50'>
                    <h1 className="max-w-[550px] text-3xl z-40 font-semibold max-review:text-center">{heading}</h1>
                    <div className='flex justify-center items-center'>
                        {/* <Link passHref href={cta} > */}
                        <button onClick={handleModalOpen} className='px-5 py-2 rounded-md text-white bg-gradient-to-r from-primary to-secondary'>Contact Us</button>
                        {/* </Link> */}
                    </div>
                </div>
            </section>
        </>
    )
}

