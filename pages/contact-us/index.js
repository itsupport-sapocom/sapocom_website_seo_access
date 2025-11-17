import React, { useState } from 'react'
import Image from 'next/image'
import SetHeaders from '@/layouts/SetHeaders'
import VideoBackgroundMessage from '@/components/VideoBackgroundMessage'
import { useDispatch } from 'react-redux';
import { setLoadingState } from '@/store/reducers/valueReducer';

// images
import contactAddressBg from '@/assets/images/contact/contact-address.png'

function ContactUs() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: '', email: '', number: '', message: '' });

  async function formSubmitHandler(e) {
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
      setTimeout(() => {
        alert('Form Submitted Successfully!!!');
      }, 10);
      setForm({ name: '', email: '', number: '', message: '' });
    } catch (error) {
      alert('Something went wrong. Please Try Again')
      console.log(error);
      dispatch(setLoadingState(false));
    }

    // Send Mail to User
    // try {
    //   const url = `/api/send-mail-to-user`;
    //   const jsonResponse = await fetch(url, {
    //     method: 'POST',
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ email: mail })
    //   })
    //   const response = await jsonResponse.json();
    // } catch (error) {
    //   console.log(error);
    // }
  }

  return (
    <>
      <SetHeaders title='Contact Us | Sapocom' />
      {/* Contact Form */}
      <section className='w-full p-4 md:py-8 bg-gradient-to-r from-secondary to-third text-white' >
        <div className='max-w-1200 mx-auto grid md:grid-cols-[1fr_1fr] grid-cols-1 gap-8'>
          {/* Contact Us Form */}
          <div>
            <p className=' uppercase mb-4 font-medium'>Client</p>
            <h2 className='text-3xl font-medium max-w-[550px] mb-4'>Have a Question ?<br />Let’s Get in Touch with us 👋</h2>
            <p className=' mb-6 opacity-70 max-w-[500px]'>Fill up the Form  and ou team will get back to within 24 hrs</p>
            {/* Form  */}
            <form className='max-w-[450px]' onSubmit={formSubmitHandler}>
              <label htmlFor="name" className='mb-6 block'>
                <span className='block opacity-60 text-lg'>Name *</span>
                <input type="text" name="name" id="name" required placeholder='Please enter your name' className='border-b border-b-white/60 focus:border-b-white w-full py-2 outline-none bg-transparent placeholder:text-white/60 placeholder:focus:text-white' value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </label>

              <label htmlFor="email" className='mb-6 block'>
                <span className='block opacity-60 text-lg'>Email *</span>
                <input type="email" name="email" id="email" required placeholder='Please enter your email' className='border-b border-b-white/60 focus:border-b-white w-full py-2 outline-none bg-transparent placeholder:text-white/60 placeholder:focus:text-white' value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </label>

              <label htmlFor="mobNumber" className='mb-6 block'>
                <span className='block opacity-60 text-lg'>Phone Number *</span>
                <input type="number" name="mobNumber" id="mobNumber" required placeholder='Please enter your phone number' className='border-b border-b-white/60 focus:border-b-white w-full py-2 outline-none bg-transparent placeholder:text-white/60 placeholder:focus:text-white' value={form.number} onChange={(e) => setForm({ ...form, number: e.target.value })} />
              </label>

              <label htmlFor="message" className='mb-6 block'>
                <span className='block opacity-60 text-lg'>Message *</span>
                <textarea name="message" id="message" rows="4" required placeholder='Write your message here' className='border-b border-b-white/60 focus:border-b-white w-full py-2 resize-none outline-none bg-transparent placeholder:text-white/60 placeholder:focus:text-white' value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}></textarea>
              </label>

              <div className='grid 1000:grid-cols-[135px_1fr]  gap-4'>
                <button type='submit' className='rounded-sm py-2 px-3 bg-white text-secondary hover:bg-primary hover:text-white transition-all'>Send Message</button>
                <p className=' inline-block'>By clicking here, I state that I have read and understood the terms and conditions.</p>
              </div>
            </form>
          </div>

          {/* Office Address Details  */}
          <div className="flex flex-grow text-center w-full justify-center items-center max-md:hidden">
            <div className='md:w-full max-md:max-w-[450px] relative'>
              <div className='absolute top-0 left-0 w-full h-full bg-transparent z-[10] rounded-tr-[60px] p-8 flex justify-start place-items-end'>
                <div className='text-left text-white'>
                  <div className='mb-4'>
                    <p className='text-white/60 pb-1 border-b border-b-white mb-2 max-w-[200px]'>Office Address</p>
                    <p>Third Floor, Plot No: 128-P2, Ground Floor, near Ginger Hotel, Whitefield, EPIP Zone, Bengaluru, Karnataka 560066</p>
                  </div>
                  <div className='mb-4'>
                    <p className='text-white/60 pb-1 border-b border-b-white mb-2 max-w-[200px]'>Working Hour</p>
                    <p>Monday to Friday</p>
                    <p>11:00 AM to 7:00 PM</p>
                    <p className='opacity-60'>Our Support Team is available 24Hrs</p>
                  </div>
                  <div className='mb-4'>
                    <p className='text-white/60 pb-1 border-b border-b-white mb-2 max-w-[200px]'>Contact Us</p>
                    <p>9919636685</p>
                    <p>contact@sapocomglobal.com</p>
                  </div>
                  <div className=' flex '>
                    <a href='https://www.instagram.com/' target='_blank' rel="noopener noreferrer" className='w-9 h-9 bg-secondary rounded-full p-2 mr-2 grid place-items-center hover:bg-primary' aria-label="instagram">
                      <Image alt='instagram_logo' src={require('../../assets/images/icons/instagram.svg')} />
                    </a>
                    <a href='https://twitter.com/home' target='_blank' rel="noopener noreferrer" className='w-9 h-9 bg-secondary rounded-full p-2 mr-2 grid place-items-center hover:bg-primary' aria-label="twitter">
                      <Image alt='twitter_logo' src={require('../../assets/images/icons/twitter.svg')} />
                    </a>
                    <a href='https://www.facebook.com/' target='_blank' rel="noopener noreferrer" className='w-9 h-9 bg-secondary rounded-full p-2 mr-2 grid place-items-center hover:bg-primary' aria-label="facebook">
                      <Image alt='facebook_logo' src={require('../../assets/images/icons/facebook.svg')} />
                    </a>
                    <a href='https://www.linkedin.com/in/sapocom-technologies-79382b231/' target='_blank' rel="noopener noreferrer" className='w-9 h-9 bg-secondary rounded-full p-2 mr-2 grid place-items-center hover:bg-primary' aria-label="linked in">
                      <Image alt='linkedIn_logo' src={require('../../assets/images/icons/linked-in.svg')} />
                    </a>
                  </div>
                </div>
              </div>
              <Image src={contactAddressBg} priority alt='contact_address_image' className='md:w-full max-md:max-w-[450px]' />
            </div>

          </div>
        </div>
      </section>

      <VideoBackgroundMessage>
        <h1 className='text-white font-semibold max-md:text-2xl text-3xl text-center max-w-[800px]'>Let&apos;s discover what software solution will boost your services</h1>
      </VideoBackgroundMessage>
    </>
  )
}

export default ContactUs
