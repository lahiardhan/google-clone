import Head from 'next/head'
import Image from 'next/image'
import { MicrophoneIcon, ViewGridIcon } from '@heroicons/react/solid'
import { SearchIcon } from '@heroicons/react/outline'
import Avatar from '../components/atoms/Avatar'
import Footer from '../components/organisms/Footer'
import { useRef } from 'react'
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if(!term) return;
    
    router.push(`/search?term=${term}`)
  }

  return (
    <div className='flex flex-col justify-center h-screen'>
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.png"/>
      </Head>

      {/* Header */}
      <header className='flex w-full p-5 justify-between text-sm text-gray-700'>
        {/* Left */}
        <div className='flex space-x-4 items-center'>
          <p className='link'>About</p>
          <a className='link' href="https://chrome.google.com/webstore/">Store</a>
        </div>

        {/* Right */}
        <div className='flex space-x-4 items-center'>
          <a className='link' href='https://www.gmail.com'>Gmail</a>
          <p className='link'>Images</p>

          {/* Icon */}
          <ViewGridIcon className='h-12 w-12 p-2 rounded-full hover:bg-gray-100 cursor-pointer'/>

          {/* Avatar */}
          <Avatar url={'avatar.png'} />
        </div>
      </header>

      {/* Body */}
      <form className='flex flex-col flex-grow items-center justify-center'>
        <Image 
          src='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-sva-scholarship-20.png'
          height={100}
          width={300}
          alt='google-logo'
        />
        <div className='flex w-full mt-5 mb-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 sm:max-w-xl lg:max-w-2xl' >
          <SearchIcon className='h-5 mr-3 text-gray-500' />
          <input 
            type='text' 
            ref={searchInputRef}
            className='flex-grow focus:outline-none' 
          />
          <MicrophoneIcon className='h-5 ml-3 text-gray-500 cursor-pointer' />
        </div>

        <div className='flex flex-col w-1/2 space-y-2 justify-center sm:flex-row sm:space-y-0 sm:space-x-4'>
          <button onClick={search} className='btn'>Google Search</button>

          <button onClick={search} className='btn'>I`m Feeling Lucky</button>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  )
}
