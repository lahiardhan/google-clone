/* eslint-disable @next/next/no-img-element */
import React from 'react'

function Avatar({url, className}) {
  return (
    <img 
      className={`h-12 p-[5px] rounded-full cursor-pointer transition duration-150 transform hover:bg-gray-100 ${className}`}
      loading='lazy'
      src={url}
      alt='profile picture'
   />
  )
}

export default Avatar