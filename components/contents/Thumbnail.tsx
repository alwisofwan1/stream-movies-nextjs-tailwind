import React, { forwardRef } from 'react'
import Image from 'next/image'

import { ThumbUpIcon } from '@heroicons/react/outline'

const Thumbnail = ({ result }, ref) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/'

  console.log('result', result)

  return (
    <div
      ref={ref}
      className="p-2 cursor-pointer transition duration-200 ease-in transform hover:z-50"
    >
      <Image
        className="rounded sm:hover:transform sm:hover:scale-110 transition duration-300 "
        layout="responsive"
        height={1080}
        width={1920}
        src={
          `${BASE_URL}${result?.backdrop_path || result?.poster_path}` ||
          `${BASE_URL}${result?.poster_path}`
        }
      />

      <div className="p-2 cursor-pointer">
        {/* <p className="truncate max-w-md">{result?.overview}</p> */}
        <h2 className="mt-1 text-sm font-medium text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result?.title || result?.original_name}
        </h2>
        <p className="flex items-center text-sm text-gray-300 font-normal">
          {result?.media_type && `${result?.media_type} ·`}{' '}
          {result?.release_date || result?.first_air_date} ·{' '}
          <ThumbUpIcon className="h-5 mx-2" /> {result?.vote_count}
        </p>
      </div>
    </div>
  )
}

export default forwardRef(Thumbnail)
