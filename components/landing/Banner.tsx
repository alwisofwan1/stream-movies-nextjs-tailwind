import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import isEmpty from 'lodash/isEmpty'

const Banner = ({ data }) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/'
  return (
    <>
      {isEmpty(data) ? (
        <section
          className="relative hidden max-h-full mb-10 text-white bg-top bg-no-repeat bg-cover md:block"
          style={{
            backgroundImage:
              'url(https://images6.alphacoders.com/804/thumb-1920-804809.jpg)'
          }}
          role="banner"
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          <div className="relative max-w-screen-xl px-4 py-24 mx-auto sm:px-6 lg:px-8 sm:py-36 lg:items-center lg:flex">
            <div className="max-w-3xl">
              <p className="text-sm font-medium tracking-widest uppercase">
                &mdash; About
              </p>

              <h1 className="mt-2 text-3xl font-bold sm:text-5xl">
                Lorem ipsum, dolor sit amet consectetur adipisicing.
              </h1>

              <p className="max-w-lg mt-4 sm:text-xl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
                fuga quam quae sequi cupiditate voluptas, eligendi ad iure at
                saepe?
              </p>
            </div>
          </div>
        </section>
      ) : (
        <Carousel
          autoPlay={true}
          showIndicators={false}
          showThumbs={false}
          showStatus={false}
          stopOnHover={true}
          animationHandler="fade"
          dynamicHeight={true}
          infiniteLoop={true}
          interval={3000}
          className="mb-10"
        >
          {data?.map(item => {
            return (
              <section
                key={item?.id}
                className="relative hidden text-white bg-top bg-no-repeat bg-cover md:block"
                style={{
                  maxHeight: '450px',
                  backgroundImage: `url(${
                    BASE_URL + item?.backdrop_path ||
                    BASE_URL + item?.poster_path ||
                    'https://images6.alphacoders.com/804/thumb-1920-804809.jpg'
                  })`
                }}
                role="banner"
              >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                <div className="relative max-w-screen-xl px-4 py-24 mx-auto sm:px-6 lg:px-8 sm:py-36 lg:items-center lg:flex">
                  <div className="max-w-3xl text-left">
                    <p className="text-sm font-medium tracking-widest uppercase">
                      &mdash; Now Playing
                    </p>
                    <h1 className="mt-2 text-3xl font-bold sm:text-5xl">
                      {item?.title || item?.original_name}
                    </h1>

                    <p className="max-w-lg mt-4 text-base sm:text-xl line-clamp-3">
                      {item?.overview ||
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam deserunt, expedita doloremque iste cumque commodi voluptate quae veritatis. Nostrum voluptatibus architecto optio obcaecati laboriosam sequi possimus reprehenderit sed aliquid veniam?'}
                    </p>
                  </div>
                </div>
              </section>
            )
          })}
        </Carousel>
      )}
    </>
  )
}

export default Banner
