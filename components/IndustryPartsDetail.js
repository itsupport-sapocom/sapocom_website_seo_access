import { industryMetalSolutionProviding } from '@/configs/config';
import Image from 'next/image';
import React, { useState } from 'react'

function IndustryPartsDetail({ title = 'solutions', heading = 'Digitizing all the processes, driving Innovation and Efficiency in Metal and Mining Operations', description = 'Here you can have a short description of some digital technologies', details }) {
    const [activeSolution, setActiveSolution] = useState(industryMetalSolutionProviding[0]);

    function setActiveSolutionDetails(obj) {
        setActiveSolution(obj)
    }

    return (
        <>
            <section className="p-4 my-8 max-w-1200 mx-auto">
                <div className='mb-10'>
                    <p data-aos='fade-up' data-aos-delay='100' className='text-secondary uppercase mb-2 font-medium'>{title}</p>
                    <h2 data-aos='fade-up' data-aos-delay='200' className='text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary from-30%  to-secondary to-90% mb-2 max-w-[750px]'>{heading}</h2>
                    <p data-aos='fade-up' data-aos-delay='300' className='text-black mb-4 opacity-70 max-w-[500px]'>{description}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6">
                    <div>
                        {
                            details.map((detail, ind) => {
                                return (
                                    <div key={ind} className={`${activeSolution.title == detail.title ? 'bg-grey' : 'bg-white'} rounded-sm p-2 mb-2 font-semibold cursor-pointer`} onClick={() => setActiveSolutionDetails(detail)}>
                                        <p className={`${activeSolution.title == detail.title ? 'text-primary' : 'text-black'}`}>{detail.title}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div>
                        <div className="w-full h-full rounded-lg grid grid-cols-1 review:grid-cols-[1fr_250px]">
                            <div className='text-white max-review:rounded-t-lg review:rounded-l-lg bg-gradient-to-br from-primary to-secondary p-4'>
                                <p className='text-xl font-bold mb-4'>{activeSolution.heading}</p>
                                <p className="opacity-60">{activeSolution.description}</p>
                            </div>
                            <div className='w-full h-full rounded-b-lg review:rounded-r-lg'>
                                <Image alt={activeSolution.title} src={activeSolution.image} className='w-full h-full object-cover  rounded-br-[70px] max-review:rounded-bl-lg review:rounded-tr-lg' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default IndustryPartsDetail
