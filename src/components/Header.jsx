import React from 'react'
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import { auth, provider } from "../firebase";
import Auth from './Auth';
export const Header = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((err) => alert(err.message));

  };
    return (
      <div className="overflow-hidden">
      <header style={{
        background: "#003a75"
      }} className='flex items-center justify-between px-4 py-4'>
          <a href='/'>
            <img src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-logodownload-download-logotipos-1.png" alt="discord logo" className='w-12 h-12 object-contain' /> </a>

          <div className="hidden lg:flex space-x-6">
              <a className='link' href="/">Download</a>
              <a className='link'  href="/">Why Discord</a>
              <a className='link'  href="/">Contact</a>
              <a className='link'  href="/">Support</a>
              <a className='link'  href="/">Nitro</a>
          </div>

          <div className="flex items-center space-x-2">
          <div className="px-4 py-2 rounded-full  bg-yellow-500 text-white text-md hover:opacity-80">
            <Auth isLogin={true} />
          </div>
          <div className="px-4 py-2 rounded-full bg-yellow-500  text-md hover:opacity-80">
            <Auth />
            </div>
            </div>
      </header>
      
      <div className=" flex flex-col md:flex-row space-y-10 md:space-y-0 p-7 py-9  h-screen md:max-h-full bg-[#003a75]">
                <div className="flex flex-col items-start justify-center  w-full md:max-w-md lg:max-w-[58%]">
                    <h1 className='text-[2.5rem] md:text-[2.7rem] text-white font-bold mb-4'>Your place to talk</h1>
                    <p className='text-md mb-8 max-w-3xl text-white'>Whether you’re part of a school club, gaming group, worldwide art community, or just a handful of friends that want to spend time together, Discord makes it easy to talk every day and hang out more often.</p>

                    <div className="flex justify-center items-center flex-col md:flex-row space-x-0 space-y-4 md:space-x-4 md:space-y-0">
                        <button className=' flex items-center space-x-2 bg-white text-black rounded-full px-4 py-[.8rem] text-sm hover:opacity-80'>
                            <ArrowDownTrayIcon className="w-6 mr-2" />   
                            Download for Mac
                        </button>
                        
                        <button onClick={signIn} className='flex items-center space-x-2 bg-black text-white rounded-full px-4 py-[.8rem] text-sm hover:opacity-80'>   
                           Open Discord in Browser
                    </button>
                    </div>
              </div>

                <div className="flex-grow flex item-center justify-center flex-col">
                  <img src="https://astrolus-premium.netlify.app/images/hero-dark.webp" className='' alt="" srcset="" />
              </div>
      </div>
      </div>
  )
}
