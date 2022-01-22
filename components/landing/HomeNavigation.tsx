/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from 'react'
import Image from 'next/image'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { IMAGE_URL } from '../../constants/globalVariables'

const HomeNavigation = ({ title, results }) => {
  const [stateChange, setStateChange] = useState({ isMoving: false })

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
      slidesToSlide: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7.1,
      slidesToSlide: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 3
    }
  }

  return (
    <div className="relative mx-auto mt-auto mb-10 home-content-row max-w-7xl">
      <div className="flex items-center justify-between mb-4 home-section__head">
        <h1 className="font-semibold home-section__title">
          <a className="js-ahoy" href="/categories/177-vidio-originals">
            {title}
          </a>
        </h1>
        <div className="text-white home-section__title-link">
          <a
            className="home-section__view_more"
            href="/categories/177-vidio-originals"
          >
            Show more
          </a>
        </div>
      </div>

      {/* <div className="flex space-x-10 overflow-x-scroll select-none whitespace-nowrap sm:space-x-5 scrollbar-hide">

      </div> */}
      <Carousel
        responsive={responsive}
        draggable={true}
        swipeable={true}
        beforeChange={() => setStateChange({ isMoving: true })}
        afterChange={() => setStateChange({ isMoving: false })}
        containerClass="container"
        // infinite={true}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        keyBoardControl={true}
        ssr={true}
      >
        {results?.map(result => {
          console.log(result)

          return (
            <div key={result?.id} className="home-content">
              <a
                onClick={e => {
                  if (stateChange.isMoving) {
                    e.preventDefault()
                  }
                }}
                href="/premier/3674/jingga-dan-senja"
              >
                <div
                  className="home-content__image"
                  style={{
                    padding: 10,
                    overflow: 'hidden'
                  }}
                >
                  <picture className="picture-tag">
                    <img
                      className="rounded-lg picture-tag__image"
                      loading="lazy"
                      alt={result?.title || result?.original_name}
                      srcSet={`${IMAGE_URL}${result?.poster_path}`}
                      src={`${IMAGE_URL}${result?.poster_path}`}
                      draggable={false}
                    />
                  </picture>
                </div>
              </a>
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

export default HomeNavigation
