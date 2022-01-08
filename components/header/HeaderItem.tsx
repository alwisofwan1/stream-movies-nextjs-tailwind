import React from 'react'
import { useRouter } from 'next/router'

const HeaderItem = ({ Icon, title, path }) => {
  const router = useRouter()
  return (
    <div
      className="flex flex-col items-center w-12 cursor-pointer group sm:w-20"
      onClick={() => router.push(path)}
    >
      <Icon className="h-6 mb-1 group-hover:animate-bounce " />
      <p className="tracking-widest opacity-0 group-hover:opacity-100">
        {title}
      </p>
    </div>
  )
}

export default HeaderItem
