import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import logo from '@/assets/images/logo.png'
import { navTabs } from '@/configs/config'
import { useRouter } from 'next/router'

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const route = useRouter();

  useEffect(()=> {
    const path = `/${route.pathname.split('/')[1]}`
    const activeTabData = navTabs.find((tab)=> tab.link === path);
    if(activeTabData) {
      setActiveTab(activeTabData.name)
    }
  }, [route.pathname])

  return (
    <header className='w-full px-4 py-2 h-[65px] sticky top-0 left-0 z-[90] shadow-md bg-white'>
      {/* Black Transparent Screen */}
      <div className={`fixed w-screen h-screen bg-black/10 top-0 left-0 md:hidden z-[91] ${!showNav && 'max-md:hidden'}`}></div>
      {/* PC & Laptop Screen */}
      <div className={`max-w-1200 mx-auto flex justify-between gap-4 items-center h-full max-md:fixed max-md:right-0 max-md:top-0 max-md:bg-white max-md:h-screen max-md:w-[250px] max-md:flex-col max-md:p-4 max-md:items-start z-[92] max-md:shadow-nav max-md:transition-all ${!showNav && 'max-md:right-[-300px]'}`}>
        {/* Logo */}
        <Link href='/' passHref className='max-md:hidden'>
          <Image src={logo} width={60} className='h-auto w-auto' alt='header_logo' />
        </Link>

        {/* Navbar Close Button */}
        <div className='flex w-full justify-end md:hidden'>
          <div className='bg-black p-2' onClick={() => setShowNav(false)}>
            <Image src={require('../assets/images/icons/cross-menu.svg')} width={15} height={15} alt='hamburger' />
          </div>
        </div>

        {/* Navbar */}
        <nav className='md:flex h-full max-md:w-full'>
          <ul className='flex justify-center items-center max-md:flex-col max-md:w-full'>
            {
              navTabs.map((tab, ind) => {
                if (!tab?.subTabs) {
                  // Tabs without Dropdown
                  return (
                    <li key={ind} className='max-md:w-full'>
                      <Link className={`p-2 md:p-4 block text-black/30 font-semibold md:border-y-4 border-transparent md:hover:border-b-primary hover:text-primary ${activeTab == tab.name && 'text-primary md:border-b-primary max-md:bg-grey max-md:rounded-md'}`} onClick={() => { setActiveTab(tab.name); setShowNav(false) }} href={tab.link}>{tab.name}</Link>
                    </li>
                  )
                }
                else {
                  // Tabs with Dropdown
                  return (
                    <li key={ind} className='max-md:w-full cursor-pointer'>
                      <div className={`p-2 md:p-4 block text-black/30 font-semibold md:border-y-4  max-md:rounded-md border-transparent hover:border-b-primary relative group hover:text-primary ${activeTab == tab.name && 'text-primary border-b-primary'}`} onClick={() => {
                        setActiveTab(tab.name);
                      }}>
                        <div className='max-md:flex max-md:justify-between'>
                          {tab.name}
                          <Image src={require('../assets/images/icons/top-arrow.svg')} width={10} height={10} className='inline ml-3 rotate-180 group-hover:rotate-0 transition-[transform]' alt='dropdown' />
                        </div>
                        <div className="md:pt-6 hidden md:absolute group-hover:block md:w-48 w-full">
                          <ul className='py-2 md:p-4 md:bg-white md:shadow-md rounded-md md:top-2 '>
                            {/* <div className='font-semibold mb-2 max-md:hidden'>{tab.name}</div> */}
                            {
                              tab.subTabs.map((subTab, ind) => <li key={ind} className='p-1 font-medium text-black block hover:bg-grey rounded-sm'><Link className='ml-5  block hover:text-primary before:hover:content-["●"] before:text-primary before:absolute before:left-[-15px]'  onClick={() => setShowNav(false)}  href={`${tab.link}${subTab.link}`}>{subTab.name}</Link></li>)
                            }
                          </ul>
                        </div>
                      </div>
                    </li>

                  )
                }
              })
            }
          </ul>
        </nav>

        {/* Contact Us Button */}
        <Link href='/contact-us' passHref>
          <div className="py-1 px-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary/10 ">Contact Us</div>
        </Link>
      </div>

      {/* Mobile Screen */}
      <div className='max-w-1200 mx-auto flex justify-between items-center h-full md:hidden'>
        {/* Logo */}
        <Link href='/' passHref>
          <Image src={logo} width={60} alt='logo' />
        </Link>
        {/* Hamburger Icon */}
        <div className='md:hidden' onClick={() => setShowNav(true)}>
          <Image src={require('../assets/images/icons/menu.svg')} width={30} height={30} alt='hamburger' />
        </div>
      </div>
    </header>
  )
}

export default Navbar
