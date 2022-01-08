import React, { useRef } from 'react'
import requests from '../../utils/requests'
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter()

  const cardContainer = useRef(null)

  console.log('cardContainer', cardContainer)

  let mouseDown = false
  let startX, scrollLeft

  const startDragging = e => {
    mouseDown = true
    startX = e?.pageX - cardContainer?.current?.offsetLeft
    scrollLeft = cardContainer?.current?.scrollLeft
  }

  const stopDragging = event => {
    mouseDown = false
  }

  const mouseMoveCardHandler = e => {
    e.preventDefault()
    if (!mouseDown) {
      return
    }
    const x = e.pageX - cardContainer.current.offsetLeft
    const scroll = x - startX
    cardContainer.current.scrollLeft = scrollLeft - scroll
  }

  const mouseDownHandler = e => {
    startDragging(e)
  }

  const mouseUpHandler = e => {
    stopDragging(e)
  }

  const mouseLeaveHandler = e => {
    stopDragging(e)
  }

  return (
    <nav className="relative">
      <div
        onMouseMove={mouseMoveCardHandler}
        onMouseDown={e => mouseDownHandler(e)}
        onMouseUp={e => mouseUpHandler(e)}
        onMouseLeave={e => mouseLeaveHandler(e)}
        ref={cardContainer}
        className="flex px-10 py-1 space-x-10 overflow-x-scroll text-base select-none sm:px-20 whitespace-nowrap sm:space-x-5 scrollbar-hide"
      >
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h4
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className="nav-landing px-5 py-1 rounded-2xl transition duration-100 transform cursor-pointer last:pr-24 hover:scale-110 hover:text-white active:text-yellow-500"
            style={{ backgroundColor: '#212121' }}
          >
            {title}
          </h4>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#141111] w-1/12 h-10" />
    </nav>
  )
}

export default Navbar
