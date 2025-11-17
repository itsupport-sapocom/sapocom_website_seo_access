import React from 'react'

export default function ModalWrapper({ children, closeModal }) {
    return (
        <div className='fixed top-0 left-0 z-[96] w-screen h-screen bg-black/50 p-4 md:p-4 grid place-items-center'>
            <div onClick={() => closeModal()} className="bg-black/50 absolute top-0 left-0 w-full h-full cursor-pointer"></div>
            {children}
        </div>
    )
}


