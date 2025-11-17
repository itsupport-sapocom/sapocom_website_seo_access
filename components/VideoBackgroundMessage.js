import React from 'react'

export default function VideoBackgroundMessage({ children }) {
    return (
        <>
            <section className='w-full p-4 md:py-48 py-36 relative bg-gray-400 flex justify-center items-center'>
                <video src={"/sapocomIntro.mp4"} type="video/mp4" preload="auto" muted autoPlay loop className='absolute top-0 left-0 w-full h-full object-cover'></video>
                <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
                {children}
            </section>
        </>
    )
}

