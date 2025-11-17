import React from 'react'
import Image from 'next/image'
import whyChooseSapocomTime from '../assets/images/icons/why-choose-sapocom-time.svg'
import whyChooseSapocomBulb from '../assets/images/icons/why-choose-sapocom-bulb.svg'
import whyChooseSapocomStar from '../assets/images/icons/why-choose-sapocom-person-with-star.svg'


function WhyChooseSapocom() {
    return (
        <>
            {/* Why Chose Us  */}
            <section className='w-full p-4 max-md:py-8 py-10 max-w-1200 mx-auto ' >
                <div className='flex items-center flex-col mb-10 max-md:mb-5 text-center'>
                    <p data-aos='flip-left' data-aos-delay='100' className='text-black uppercase mb-2 font-medium'>Why Choose</p>
                    <h2 data-aos='flip-right' data-aos-delay='100' className='md:text-4xl text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary from-30%  to-secondary to-90% mb-2'>Why Choose SAPOCOM ?</h2>
                    <p data-aos='flip-left' data-aos-delay='100' className='text-black opacity-70 text-center'>Our state-of-the-art digital solutions promise our clients exponential growth toward a sustainable future.</p>
                </div>
                {/* View for Desktop */}
                <div className='grid grid-cols-auto-3-250 justify-items-center gap-6 mx-auto max-w-800 p-2'>
                    <div className="aspect-[4/3] w-[250px] flex items-end select-none">
                        <div data-aos='fade-up' data-aos-delay={100} className={`
                                 bg-white rounded-md border-2 aspect-[2/1] w-[250px] p-4 hover:shadow-card relative`}>
                            <div className={`rounded-md aspect-[1/1] w-20 p-3 flex justify-center items-center absolute left-4 -top-[25%] bg-[#FF86CF]`}>
                                <Image src={whyChooseSapocomBulb} alt='whyChooseSapocomBulb' />
                            </div>
                            <h1 className='font-medium text-secondary text-xl pt-12'>Innovative and Future-Focused Solutions</h1>

                        </div>
                    </div>
                    <div className="aspect-[4/3] w-[250px] flex items-end select-none">
                        <div data-aos='fade-up' data-aos-delay={200} className={`
                                 bg-white rounded-md border-2 aspect-[2/1] w-[250px] p-4 hover:shadow-card relative`}>
                            <div className={`rounded-md aspect-[1/1] w-20 p-3 flex justify-center items-center absolute left-4 -top-[25%] bg-[#DDE8FE]`}>
                                <Image src={whyChooseSapocomTime} alt='whyChooseSapocomTime' />
                            </div>
                            <h1 className='font-medium text-secondary text-xl pt-12'>Years of Expertise with Experience</h1>
                        </div>
                    </div>
                    <div className="aspect-[4/3] w-[250px] flex items-end select-none">
                        <div data-aos='fade-up' data-aos-delay={300} className={`
                                 bg-white rounded-md border-2 aspect-[2/1] w-[250px] p-4 hover:shadow-card relative`}>
                            <div className={`rounded-md aspect-[1/1] w-20 p-3 flex justify-center items-center absolute left-4 -top-[25%] bg-[#C7FFB4]`}>
                                <Image src={whyChooseSapocomStar} alt='whyChooseSapocomStar' />
                            </div>
                            <h1 className='font-medium text-secondary text-xl pt-12'>Customer Centric Approach</h1>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default WhyChooseSapocom
