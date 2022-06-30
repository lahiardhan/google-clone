import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import Avatar from '../../atoms/Avatar';
import HeaderOptions from '../HeaderOptions';

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if(!term) return;

    router.push(`/search?term=${term}`)
  }

  return (
    <header className='sticky top-0 bg-white'>
      <div className='flex p-6 w-full items-center'>
        <Image 
          src='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-sva-scholarship-20.png'
          height={40}
          width={120}
          className='cursor-pointer'
          alt='google-logo'
          onClick={() => router.push('/')}
        />

        <form className='flex flex-grow ml-10 mr-5 px-6 py-3 border border-gray-200 rounded-full shadow-lg max-w-2xl items-center' >
          <input 
            ref={searchInputRef} 
            type='text' 
            className='flex-grow w-full focus:outline-none' 
          />
          <XIcon 
            className='h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125 sm:mr-3'
            onClick={() => searchInputRef.current.value = ''}
          />
          <MicrophoneIcon className='h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4'/>
          <SearchIcon className='h-6 hidden sm:inline-flex text-blue-500'/>
          <button hidden onClick={search}>Search</button>
        </form>
        <Avatar url='https://coaching.papareact.com/ai9' className='ml-auto'/>
      </div>

      {/* Header Option Components */}
      <HeaderOptions />
    </header>
  )
}

export default Header;