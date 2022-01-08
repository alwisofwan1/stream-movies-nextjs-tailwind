import React from 'react'

const Banner = () => {
  return (
    <section
      className="relative text-white bg-no-repeat bg-top bg-cover max-h-full hidden md:block mb-10"
      style={{
        backgroundImage:
          'url(https://images6.alphacoders.com/804/thumb-1920-804809.jpg)'
      }}
      role="banner"
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative max-w-screen-xl px-4 py-24 mx-auto  sm:px-6 lg:px-8 sm:py-36 lg:items-center lg:flex">
        <div className="max-w-3xl">
          <p className="text-sm font-medium tracking-widest uppercase">
            &mdash; About
          </p>

          <h1 className="mt-2 text-3xl font-bold sm:text-5xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing.
          </h1>

          <p className="max-w-lg mt-4 sm:text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo fuga
            quam quae sequi cupiditate voluptas, eligendi ad iure at saepe?
          </p>
        </div>
      </div>
    </section>
  )
}

export default Banner
