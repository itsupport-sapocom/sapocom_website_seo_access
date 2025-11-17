import React, { useState } from 'react'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux';
import { getContactUsModalState, setContactUsModalState, setLoadingState } from '@/store/reducers/valueReducer';
import ModalWrapper from '@/layouts/ModalWrapper'
import contactUsModalImage from '@/assets/images/modals/contactUsSideImage.png'

export default function ContactUsModal() {
    const dispatch = useDispatch();
    const contactUsModalOpen = useSelector(getContactUsModalState);
    const [form, setForm] = useState({ name: '', email: '', number: '', message: '' });

    async function formSubmitHandler(e) {
        // Send Mail to Admin
        e.preventDefault();
        try {
            dispatch(setLoadingState(true));
            const url = `/api/send-mail-to-admin`;
            const jsonResponse = await fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form)
            })
            const response = await jsonResponse.json();
            dispatch(setLoadingState(false));
            closeModal(true);
            setTimeout(() => {
                alert('Form Submitted Successfully!!!');
            }, 10);
            setForm({ name: '', email: '', number: '', message: '' });
        } catch (error) {
            // console.log(error);
            dispatch(setLoadingState(false));
        }


        // Send Mail to User
        // try {
        //     const url = '/api/send-mail-to-user';
        //     const jsonResponse = await fetch(url, {
        //         method: 'POST',
        //         headers: { "Content-Type": "application/json" },
        //         body: JSON.stringify({ email: mail })
        //     })
        //     const response = await jsonResponse.json();
        // } catch (error) {
        //     console.log(error);
        // }
    }

    function closeModal() {
        dispatch(setContactUsModalState(false));
    }

    return (
        <>
            {
                contactUsModalOpen &&
                <ModalWrapper closeModal={closeModal}>
                    <div className="max-w-800 w-full rounded-lg bg-white p-4 grid grid-cols-1  md:grid-cols-[1fr_300px] gap-8 relative">
                        {/* close modal button */}
                        <div className="absolute right-4 top-4 md:right-6 md:top-6 bg-black p-2 z-50 rounded-sm cursor-pointer opacity-30 hover:opacity-100 transition-[opacity]" onClick={closeModal}>
                            <Image src={require('../../assets/images/icons/cross-menu.svg')} width={15} height={15} alt='hamburger' />
                        </div>
                        {/* Contact Form*/}
                        <div className='md:m-4'>
                            <h1 className='text-secondary font-semibold text-xl review:text-2xl md:text-3xl mb-2 max-md:text-center'>Let&apos;s Get in Touch with us 👋</h1>
                            <p className='mb-4 max-md:text-center'>Fill up the Form and our team will reach you</p>
                            <form className='md:max-w-[450px]' onSubmit={formSubmitHandler}>
                                <label htmlFor="name" className='mb-4 md:mb-6 block'>
                                    <span className='block opacity-60 text-lg'>Name *</span>
                                    <input type="text" name="name" id="name" required placeholder='Please enter your name' className='border-b border-b-black/60 focus:border-b-black w-full py-2 outline-none bg-transparent placeholder:text-black/60 placeholder:focus:text-black' value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                                </label>

                                <label htmlFor="email" className='mb-4 md:mb-6 block'>
                                    <span className='block opacity-60 text-lg'>Email *</span>
                                    <input type="email" name="email" id="email" required placeholder='Please enter your email' className='border-b border-b-black/60 focus:border-b-black w-full py-2 outline-none bg-transparent placeholder:text-black/60 placeholder:focus:text-black' value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                                </label>

                                <label htmlFor="mobNumber" className='mb-4 md:mb-6 block'>
                                    <span className='block opacity-60 text-lg'>Phone Number *</span>
                                    <input type="number" name="mobNumber" id="mobNumber" required placeholder='Please enter your phone number' className='border-b border-b-black/60 focus:border-b-black w-full py-2 outline-none bg-transparent placeholder:text-black/60 placeholder:focus:text-black' value={form.number} onChange={(e) => setForm({ ...form, number: e.target.value })} />
                                </label>

                                <label htmlFor="message" className='mb-4 md:mb-6 block'>
                                    <span className='block opacity-60 text-lg'>Message *</span>
                                    <textarea name="message" id="message" rows="3" required placeholder='Write your message here' className='border-b border-b-black/60 focus:border-b-black w-full py-2 resize-none outline-none bg-transparent placeholder:text-black/60 placeholder:focus:text-black' value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}></textarea>
                                </label>

                                <div className='grid 1000:grid-cols-[135px_1fr] gap-2 md:gap-4 items-center'>
                                    <button type='submit' className='outline-none rounded-md py-2 px-3 text-white bg-gradient-to-r from-primary to-secondary transition-all hover:from-secondary hover:to-primary'>Send Message</button>
                                    <p className='text-xs max-md:text-center'>By clicking Confirm, you agree to process your personal data according to the Privacy Policy.</p>
                                </div>
                            </form>
                        </div>
                        {/* Image */}
                        <div className='w-full h-full max-md:hidden relative flex items-end'>
                            <div className="p-4 w-full z-10 text-white mb-14">
                                <p className="opacity-60">Email us for any query :</p>
                                <p>help@sapocomglobal@gmail.com</p>
                            </div>
                            <Image src={contactUsModalImage} alt='contactUsSideImage' className='absolute top-0 left-0 w-full h-full object-cover rounded-lg rounded-tl-[75px]' />
                        </div>
                    </div>
                </ModalWrapper>}
        </>
    )
}

