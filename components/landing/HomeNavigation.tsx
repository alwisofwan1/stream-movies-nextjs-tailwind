/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from 'react'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const HomeNavigation = ({ title }) => {
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
    <div className="home-content-row max-w-7xl mx-auto mt-auto mb-10 relative">
      <div className="home-section__head mb-4 flex justify-between items-center">
        <h1 className="home-section__title font-semibold">
          <a className="js-ahoy" href="/categories/177-vidio-originals">
            {title}
          </a>
        </h1>
        <div className="home-section__title-link text-white">
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
        <div className="home-content">
          <a
            onClick={e => {
              if (stateChange.isMoving) {
                e.preventDefault()
              }
            }}
            href="/premier/3674/jingga-dan-senja"
          >
            <div className="home-content__image">
              <picture className="picture-tag">
                <img
                  data-src="https://cdn-production-thumbor-vidio.akamaized.net/myxdbJ7Qdf3q4Dg7SwiscLb-BVE=/223x332/filters:quality(75)/vidio-web-prod-film/uploads/film/image_portrait/3674/jingga-dan-senja-2353de.jpg"
                  data-srcset="https://cdn-production-thumbor-vidio.akamaized.net/myxdbJ7Qdf3q4Dg7SwiscLb-BVE=/223x332/filters:quality(75)/vidio-web-prod-film/uploads/film/image_portrait/3674/jingga-dan-senja-2353de.jpg 223w, https://cdn-production-thumbor-vidio.akamaized.net/7CUf4ZUKS8-wk7o6PgrpIuJGV6g=/446x664/filters:quality(75)/vidio-web-prod-film/uploads/film/image_portrait/3674/jingga-dan-senja-2353de.jpg 669w"
                  data-sizes="auto"
                  className="picture-tag__image rounded-lg"
                  loading="lazy"
                  alt="Jingga dan Senja"
                  data-width="223"
                  data-height="332"
                  sizes="157px"
                  srcSet="https://cdn-production-thumbor-vidio.akamaized.net/myxdbJ7Qdf3q4Dg7SwiscLb-BVE=/223x332/filters:quality(75)/vidio-web-prod-film/uploads/film/image_portrait/3674/jingga-dan-senja-2353de.jpg 223w, https://cdn-production-thumbor-vidio.akamaized.net/7CUf4ZUKS8-wk7o6PgrpIuJGV6g=/446x664/filters:quality(75)/vidio-web-prod-film/uploads/film/image_portrait/3674/jingga-dan-senja-2353de.jpg 669w"
                  src="https://cdn-production-thumbor-vidio.akamaized.net/myxdbJ7Qdf3q4Dg7SwiscLb-BVE=/223x332/filters:quality(75)/vidio-web-prod-film/uploads/film/image_portrait/3674/jingga-dan-senja-2353de.jpg"
                  draggable={false}
                />
              </picture>
            </div>
          </a>
        </div>
        <div className="home-content">
          <a
            onClick={e => {
              if (stateChange.isMoving) {
                e.preventDefault()
              }
            }}
            href="/premier/3674/jingga-dan-senja"
          >
            <div className="home-content__image">
              <picture className="picture-tag">
                <img
                  data-src="https://cdn-production-thumbor-vidio.akamaized.net/myxdbJ7Qdf3q4Dg7SwiscLb-BVE=/223x332/filters:quality(75)/vidio-web-prod-film/uploads/film/image_portrait/3674/jingga-dan-senja-2353de.jpg"
                  data-srcset="https://cdn-production-thumbor-vidio.akamaized.net/myxdbJ7Qdf3q4Dg7SwiscLb-BVE=/223x332/filters:quality(75)/vidio-web-prod-film/uploads/film/image_portrait/3674/jingga-dan-senja-2353de.jpg 223w, https://cdn-production-thumbor-vidio.akamaized.net/7CUf4ZUKS8-wk7o6PgrpIuJGV6g=/446x664/filters:quality(75)/vidio-web-prod-film/uploads/film/image_portrait/3674/jingga-dan-senja-2353de.jpg 669w"
                  data-sizes="auto"
                  className="picture-tag__image rounded-lg"
                  loading="lazy"
                  alt="Jingga dan Senja"
                  data-width="223"
                  data-height="332"
                  sizes="157px"
                  srcSet="https://cdn-production-thumbor-vidio.akamaized.net/myxdbJ7Qdf3q4Dg7SwiscLb-BVE=/223x332/filters:quality(75)/vidio-web-prod-film/uploads/film/image_portrait/3674/jingga-dan-senja-2353de.jpg 223w, https://cdn-production-thumbor-vidio.akamaized.net/7CUf4ZUKS8-wk7o6PgrpIuJGV6g=/446x664/filters:quality(75)/vidio-web-prod-film/uploads/film/image_portrait/3674/jingga-dan-senja-2353de.jpg 669w"
                  src="https://cdn-production-thumbor-vidio.akamaized.net/myxdbJ7Qdf3q4Dg7SwiscLb-BVE=/223x332/filters:quality(75)/vidio-web-prod-film/uploads/film/image_portrait/3674/jingga-dan-senja-2353de.jpg"
                  draggable={false}
                />
              </picture>
            </div>
          </a>
        </div>
        <div className="home-content">
          <a
            onClick={e => {
              if (stateChange.isMoving) {
                e.preventDefault()
              }
            }}
            href="/premier/3674/jingga-dan-senja"
          >
            <div className="home-content__image">
              <picture className="picture-tag">
                <img
                  data-src="https://cdn-production-thumbor-vidio.akamaized.net/myxdbJ7Qdf3q4Dg7SwiscLb-BVE=/223x332/filters:quality(75)/vidio-web-prod-film/uploads/film/image_portrait/3674/jingga-dan-senja-2353de.jpg"
                  data-srcset="https://cdn-production-thumbor-vidio.akamaized.net/myxdbJ7Qdf3q4Dg7SwiscLb-BVE=/223x332/filters:quality(75)/vidio-web-prod-film/uploads/film/image_portrait/3674/jingga-dan-senja-2353de.jpg 223w, https://cdn-production-thumbor-vidio.akamaized.net/7CUf4ZUKS8-wk7o6PgrpIuJGV6g=/446x664/filters:quality(75)/vidio-web-prod-film/uploads/film/image_portrait/3674/jingga-dan-senja-2353de.jpg 669w"
                  data-sizes="auto"
                  className="picture-tag__image rounded-lg"
                  loading="lazy"
                  alt="Jingga dan Senja"
                  data-width="223"
                  data-height="332"
                  sizes="157px"
                  srcSet="https://cdn-production-thumbor-vidio.akamaized.net/myxdbJ7Qdf3q4Dg7SwiscLb-BVE=/223x332/filters:quality(75)/vidio-web-prod-film/uploads/film/image_portrait/3674/jingga-dan-senja-2353de.jpg 223w, https://cdn-production-thumbor-vidio.akamaized.net/7CUf4ZUKS8-wk7o6PgrpIuJGV6g=/446x664/filters:quality(75)/vidio-web-prod-film/uploads/film/image_portrait/3674/jingga-dan-senja-2353de.jpg 669w"
                  src="https://cdn-production-thumbor-vidio.akamaized.net/myxdbJ7Qdf3q4Dg7SwiscLb-BVE=/223x332/filters:quality(75)/vidio-web-prod-film/uploads/film/image_portrait/3674/jingga-dan-senja-2353de.jpg"
                  draggable={false}
                />
              </picture>
            </div>
          </a>
        </div>
        <div className="home-content">
          <a
            onClick={e => {
              if (stateChange.isMoving) {
                e.preventDefault()
              }
            }}
            href="/premier/3674/jingga-dan-senja"
          >
            <div className="home-content__image">
              <picture className="picture-tag">
                <img
                  data-src="https://cdn-production-thumbor-vidio.akamaized.net/myxdbJ7Qdf3q4Dg7SwiscLb-BVE=/223x332/filters:quality(75)/vidio-web-prod-film/uploads/film/image_portrait/3674/jingga-dan-senja-2353de.jpg"
                  data-srcset="https://cdn-production-thumbor-vidio.akamaized.net/myxdbJ7Qdf3q4Dg7SwiscLb-BVE=/223x332/filters:quality(75)/vidio-web-prod-film/uploads/film/image_portrait/3674/jingga-dan-senja-2353de.jpg 223w, https://cdn-production-thumbor-vidio.akamaized.net/7CUf4ZUKS8-wk7o6PgrpIuJGV6g=/446x664/filters:quality(75)/vidio-web-prod-film/uploads/film/image_portrait/3674/jingga-dan-senja-2353de.jpg 669w"
                  data-sizes="auto"
                  className="picture-tag__image rounded-lg"
                  loading="lazy"
                  alt="Jingga dan Senja"
                  data-width="223"
                  data-height="332"
                  sizes="157px"
                  srcSet="https://cdn-production-thumbor-vidio.akamaized.net/myxdbJ7Qdf3q4Dg7SwiscLb-BVE=/223x332/filters:quality(75)/vidio-web-prod-film/uploads/film/image_portrait/3674/jingga-dan-senja-2353de.jpg 223w, https://cdn-production-thumbor-vidio.akamaized.net/7CUf4ZUKS8-wk7o6PgrpIuJGV6g=/446x664/filters:quality(75)/vidio-web-prod-film/uploads/film/image_portrait/3674/jingga-dan-senja-2353de.jpg 669w"
                  src="https://cdn-production-thumbor-vidio.akamaized.net/myxdbJ7Qdf3q4Dg7SwiscLb-BVE=/223x332/filters:quality(75)/vidio-web-prod-film/uploads/film/image_portrait/3674/jingga-dan-senja-2353de.jpg"
                  draggable={false}
                />
              </picture>
            </div>
          </a>
        </div>
        <div className="home-content">
          <a
            onClick={e => {
              if (stateChange.isMoving) {
                e.preventDefault()
              }
            }}
            href="/premier/3674/jingga-dan-senja"
          >
            <div className="home-content__image">
              <picture className="picture-tag">
                <img
                  data-src="https://cdn-production-thumbor-vidio.akamaized.net/myxdbJ7Qdf3q4Dg7SwiscLb-BVE=/223x332/filters:quality(75)/vidio-web-prod-film/uploads/film/image_portrait/3674/jingga-dan-senja-2353de.jpg"
                  data-srcset="https://cdn-production-thumbor-vidio.akamaized.net/myxdbJ7Qdf3q4Dg7SwiscLb-BVE=/223x332/filters:quality(75)/vidio-web-prod-film/uploads/film/image_portrait/3674/jingga-dan-senja-2353de.jpg 223w, https://cdn-production-thumbor-vidio.akamaized.net/7CUf4ZUKS8-wk7o6PgrpIuJGV6g=/446x664/filters:quality(75)/vidio-web-prod-film/uploads/film/image_portrait/3674/jingga-dan-senja-2353de.jpg 669w"
                  data-sizes="auto"
                  className="picture-tag__image rounded-lg"
                  loading="lazy"
                  alt="Jingga dan Senja"
                  data-width="223"
                  data-height="332"
                  sizes="157px"
                  srcSet="https://cdn-production-thumbor-vidio.akamaized.net/myxdbJ7Qdf3q4Dg7SwiscLb-BVE=/223x332/filters:quality(75)/vidio-web-prod-film/uploads/film/image_portrait/3674/jingga-dan-senja-2353de.jpg 223w, https://cdn-production-thumbor-vidio.akamaized.net/7CUf4ZUKS8-wk7o6PgrpIuJGV6g=/446x664/filters:quality(75)/vidio-web-prod-film/uploads/film/image_portrait/3674/jingga-dan-senja-2353de.jpg 669w"
                  src="https://cdn-production-thumbor-vidio.akamaized.net/myxdbJ7Qdf3q4Dg7SwiscLb-BVE=/223x332/filters:quality(75)/vidio-web-prod-film/uploads/film/image_portrait/3674/jingga-dan-senja-2353de.jpg"
                  draggable={false}
                />
              </picture>
            </div>
          </a>
        </div>
        <div className="home-content">
          <a
            onClick={e => {
              if (stateChange.isMoving) {
                e.preventDefault()
              }
            }}
            href="/premier/3674/jingga-dan-senja"
          >
            <div className="home-content__image">
              <picture className="picture-tag">
                <img
                  data-src="https://cdn-production-thumbor-vidio.akamaized.net/myxdbJ7Qdf3q4Dg7SwiscLb-BVE=/223x332/filters:quality(75)/vidio-web-prod-film/uploads/film/image_portrait/3674/jingga-dan-senja-2353de.jpg"
                  data-srcset="https://cdn-production-thumbor-vidio.akamaized.net/myxdbJ7Qdf3q4Dg7SwiscLb-BVE=/223x332/filters:quality(75)/vidio-web-prod-film/uploads/film/image_portrait/3674/jingga-dan-senja-2353de.jpg 223w, https://cdn-production-thumbor-vidio.akamaized.net/7CUf4ZUKS8-wk7o6PgrpIuJGV6g=/446x664/filters:quality(75)/vidio-web-prod-film/uploads/film/image_portrait/3674/jingga-dan-senja-2353de.jpg 669w"
                  data-sizes="auto"
                  className="picture-tag__image rounded-lg"
                  loading="lazy"
                  alt="Jingga dan Senja"
                  data-width="223"
                  data-height="332"
                  sizes="157px"
                  srcSet="https://cdn-production-thumbor-vidio.akamaized.net/myxdbJ7Qdf3q4Dg7SwiscLb-BVE=/223x332/filters:quality(75)/vidio-web-prod-film/uploads/film/image_portrait/3674/jingga-dan-senja-2353de.jpg 223w, https://cdn-production-thumbor-vidio.akamaized.net/7CUf4ZUKS8-wk7o6PgrpIuJGV6g=/446x664/filters:quality(75)/vidio-web-prod-film/uploads/film/image_portrait/3674/jingga-dan-senja-2353de.jpg 669w"
                  src="https://cdn-production-thumbor-vidio.akamaized.net/myxdbJ7Qdf3q4Dg7SwiscLb-BVE=/223x332/filters:quality(75)/vidio-web-prod-film/uploads/film/image_portrait/3674/jingga-dan-senja-2353de.jpg"
                  draggable={false}
                />
              </picture>
            </div>
          </a>
        </div>
        <div className="home-content">
          <a
            onClick={e => {
              if (stateChange.isMoving) {
                e.preventDefault()
              }
            }}
            href="/premier/3674/jingga-dan-senja"
          >
            <div className="home-content__image">
              <picture className="picture-tag">
                <img
                  data-src="https://cdn-production-thumbor-vidio.akamaized.net/myxdbJ7Qdf3q4Dg7SwiscLb-BVE=/223x332/filters:quality(75)/vidio-web-prod-film/uploads/film/image_portrait/3674/jingga-dan-senja-2353de.jpg"
                  data-srcset="https://cdn-production-thumbor-vidio.akamaized.net/myxdbJ7Qdf3q4Dg7SwiscLb-BVE=/223x332/filters:quality(75)/vidio-web-prod-film/uploads/film/image_portrait/3674/jingga-dan-senja-2353de.jpg 223w, https://cdn-production-thumbor-vidio.akamaized.net/7CUf4ZUKS8-wk7o6PgrpIuJGV6g=/446x664/filters:quality(75)/vidio-web-prod-film/uploads/film/image_portrait/3674/jingga-dan-senja-2353de.jpg 669w"
                  data-sizes="auto"
                  className="picture-tag__image rounded-lg"
                  loading="lazy"
                  alt="Jingga dan Senja"
                  data-width="223"
                  data-height="332"
                  sizes="157px"
                  srcSet="https://cdn-production-thumbor-vidio.akamaized.net/myxdbJ7Qdf3q4Dg7SwiscLb-BVE=/223x332/filters:quality(75)/vidio-web-prod-film/uploads/film/image_portrait/3674/jingga-dan-senja-2353de.jpg 223w, https://cdn-production-thumbor-vidio.akamaized.net/7CUf4ZUKS8-wk7o6PgrpIuJGV6g=/446x664/filters:quality(75)/vidio-web-prod-film/uploads/film/image_portrait/3674/jingga-dan-senja-2353de.jpg 669w"
                  src="https://cdn-production-thumbor-vidio.akamaized.net/myxdbJ7Qdf3q4Dg7SwiscLb-BVE=/223x332/filters:quality(75)/vidio-web-prod-film/uploads/film/image_portrait/3674/jingga-dan-senja-2353de.jpg"
                  draggable={false}
                />
              </picture>
            </div>
          </a>
        </div>
        <div className="home-content">
          <a
            onClick={e => {
              if (stateChange.isMoving) {
                e.preventDefault()
              }
            }}
            href="/premier/3674/jingga-dan-senja"
          >
            <div className="home-content__image">
              <picture className="picture-tag">
                <img
                  data-src="https://cdn-production-thumbor-vidio.akamaized.net/myxdbJ7Qdf3q4Dg7SwiscLb-BVE=/223x332/filters:quality(75)/vidio-web-prod-film/uploads/film/image_portrait/3674/jingga-dan-senja-2353de.jpg"
                  data-srcset="https://cdn-production-thumbor-vidio.akamaized.net/myxdbJ7Qdf3q4Dg7SwiscLb-BVE=/223x332/filters:quality(75)/vidio-web-prod-film/uploads/film/image_portrait/3674/jingga-dan-senja-2353de.jpg 223w, https://cdn-production-thumbor-vidio.akamaized.net/7CUf4ZUKS8-wk7o6PgrpIuJGV6g=/446x664/filters:quality(75)/vidio-web-prod-film/uploads/film/image_portrait/3674/jingga-dan-senja-2353de.jpg 669w"
                  data-sizes="auto"
                  className="picture-tag__image rounded-lg"
                  loading="lazy"
                  alt="Jingga dan Senja"
                  data-width="223"
                  data-height="332"
                  sizes="157px"
                  srcSet="https://cdn-production-thumbor-vidio.akamaized.net/myxdbJ7Qdf3q4Dg7SwiscLb-BVE=/223x332/filters:quality(75)/vidio-web-prod-film/uploads/film/image_portrait/3674/jingga-dan-senja-2353de.jpg 223w, https://cdn-production-thumbor-vidio.akamaized.net/7CUf4ZUKS8-wk7o6PgrpIuJGV6g=/446x664/filters:quality(75)/vidio-web-prod-film/uploads/film/image_portrait/3674/jingga-dan-senja-2353de.jpg 669w"
                  src="https://cdn-production-thumbor-vidio.akamaized.net/myxdbJ7Qdf3q4Dg7SwiscLb-BVE=/223x332/filters:quality(75)/vidio-web-prod-film/uploads/film/image_portrait/3674/jingga-dan-senja-2353de.jpg"
                  draggable={false}
                />
              </picture>
            </div>
          </a>
        </div>
      </Carousel>
    </div>
  )
}

export default HomeNavigation
