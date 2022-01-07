import React from 'react'
import Image from 'next/image'
import HeaderItem from './HeaderItem'

import {
  HomeIcon,
  FilmIcon,
  LightningBoltIcon,
  UserIcon
} from '@heroicons/react/outline'

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-between h-auto m-5 sm:flex-row">
      <div className="flex flex-grow max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="MOVIES" Icon={FilmIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      {/* <Image
        className="object-contain"
        width={80}
        height={80}
        src="https://st2.depositphotos.com/1192512/7173/v/600/depositphotos_71734641-stock-illustration-beautiful-pink-and-turquoise-lotus.jpg"
      /> */}
      <div className="logo">Logo</div>
    </header>
  )
}

export default Header
