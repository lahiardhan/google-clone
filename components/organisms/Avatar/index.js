/* eslint-disable @next/next/no-img-element */
import React from 'react'

function Avatar({url}) {
  return (
    <img 
      className='h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110'
      loading='lazy'
      src={url}
      alt='profile picture'
   />
  )
}

export default Avatar