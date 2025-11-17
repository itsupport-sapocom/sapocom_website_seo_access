import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/assets/images/logo.png'

function Footer() {
  return (
    <footer className='bg-white'>
      {/* Top Footer */}
      <div className='p-4 max-w-1000 mx-auto grid grid-cols-[1fr_170px_170px_170px] gap-8 max-md:gap-4 max-md:grid-cols-[1fr_1fr]'>
        {/* First Row */}
        <div className="p-2 max-md:col-span-2">
          <Image src={logo} width={80} height={80} className='mb-4 h-auto w-auto object-contain' alt='footer_logo' />
          <p>SAPOCOM Technologies, an SAP based company to provide SAP solutions to be at top globally</p>
        </div>
        {/* Second Row */}
        <div className="p-2">
          <p className='text-primary uppercase mb-4 font-semibold'>Company</p>
          <Link href='/' className='text-black mb-2 block transition-[transform] hover:text-primary  hover:translate-x-2'>Home</Link>
          <Link href='/about-us' className='text-black mb-2 block transition-[transform] hover:text-primary  hover:translate-x-2'>About Us</Link>
          <Link href='/services' className='text-black mb-2 block transition-[transform] hover:text-primary  hover:translate-x-2'>Services</Link>
          <Link href='/careers' className='text-black mb-2 block transition-[transform] hover:text-primary  hover:translate-x-2'>Careers</Link>
          <Link href='/our-culture' className='text-black mb-2 block transition-[transform] hover:text-primary  hover:translate-x-2'>Our Culture</Link>
        </div>
        {/* Third Row */}
        <div className="p-2">
          <p className='text-primary uppercase mb-4 font-semibold'>Industries</p>
          <Link href='/industries/oil-and-gas' className='text-black mb-2 block transition-[transform] hover:text-primary  hover:translate-x-2'>Oil and Gas</Link>
          <Link href='/industries/metal-and-mining' className='text-black mb-2 block transition-[transform] hover:text-primary  hover:translate-x-2'>Metal and Mining</Link>
          <Link href='/industries/agriculture' className='text-black mb-2 block transition-[transform] hover:text-primary  hover:translate-x-2'>Agriculture</Link>
          <Link href='/industries/chemical' className='text-black block transition-[transform] hover:text-primary  hover:translate-x-2'>Chemical</Link>
        </div>
        {/* Forth Row */}
        <div className=" p-2">
          <p className='text-primary uppercase mb-4 font-semibold'>Social</p>
          <a  target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/sapocom-technologies-79382b231/' className='text-black mb-2 block transition-[transform] hover:text-primary  hover:translate-x-2'>LinkedIn</a>
          <a  target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/' className='text-black mb-2 block transition-[transform] hover:text-primary  hover:translate-x-2'>Instagram</a>
          <a  target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/' className='text-black mb-2 block transition-[transform] hover:text-primary  hover:translate-x-2'>Facebook</a>
          <a  target='_blank' rel='noopener noreferrer' href='https://twitter.com/home' className='text-black block transition-[transform] hover:text-primary  hover:translate-x-2'>Twitter</a>
        </div>
      </div>
      {/* Bottom Footer */}
      <div className="border-t p-4 flex justify-center items-center [550px]:gap-4 gap-2 max-[550px]:flex-col text-secondary">
        <p >@ {new Date().getFullYear()} SAPOCOM Technologies. All rights reserved</p>
        <div className=' flex '>
          <a href='https://www.instagram.com/' target='_blank' rel="noopener noreferrer" className='w-9 h-9 bg-secondary rounded-full p-2 mr-2 grid place-items-center hover:bg-primary' aria-label="instagram">
            <Image alt='instagram_logo' src={require('../assets/images/icons/instagram.svg')} />
          </a>
          <a href='https://twitter.com/home' target='_blank' rel="noopener noreferrer" className='w-9 h-9 bg-secondary rounded-full p-2 mr-2 grid place-items-center hover:bg-primary' aria-label="twitter">
            <Image alt='twitter_logo' src={require('../assets/images/icons/twitter.svg')} />
          </a>
          <a href='https://www.facebook.com/' target='_blank' rel="noopener noreferrer" className='w-9 h-9 bg-secondary rounded-full p-2 mr-2 grid place-items-center hover:bg-primary' aria-label="facebook">
            <Image alt='facebook_logo' src={require('../assets/images/icons/facebook.svg')} />
          </a>
          <a href='https://www.linkedin.com/in/sapocom-technologies-79382b231/' target='_blank' rel="noopener noreferrer" className='w-9 h-9 bg-secondary rounded-full p-2 mr-2 grid place-items-center hover:bg-primary' aria-label="linked in">
            <Image alt='linkedIn_logo' src={require('../assets/images/icons/linked-in.svg')} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
