import React from 'react'
import Image from 'next/image'

function IndustryClient({ title = 'CLIENTS', heading = 'We have been serving companies all over the globe', description = 'Our commitment to quality, innovation, and customer satisfaction sets us apart from the competition.', clientData }) {
    return (
        <>
            <section className='w-full p-4 py-10 bg-grey' >
                <div className='max-w-1200 mx-auto flex gap-10 max-md:flex-col'>
                    <div className="flex-1 ">
                        <p data-aos='fade-up' data-aos-delay='100' className='text-secondary uppercase mb-4 font-medium'>{title}</p>
                        <h2 data-aos='fade-up' data-aos-delay='200' className='text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4 max-w-[550px]'>{heading}</h2>
                        <p data-aos='fade-up' data-aos-delay='300' className='text-black mb-6 opacity-70 max-w-[450px]'>{description}</p>
                    </div>
                    <div data-aos="zoom-in" data-aos-delay='200' className="grid grid-cols-auto-3-150 lg:grid-cols-3 gap-4 flex-1 ">
                        {clientData.map(({ image, name }, ind) => {
                            return (
                                <div key={ind} className='p-2 rounded-md bg-white transition-all hover:shadow-detailcard flex justify-center items-center'>
                                    <Image src={image} alt={name} width={100} className='w-28 h-14 object-contain mx-auto' />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default IndustryClient
