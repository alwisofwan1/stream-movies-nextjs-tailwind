import React from 'react'
import Head from 'next/head'
import Header from '../components/header/Header'
// import Navbar from '../components/header/Navbar'
// import Results from '../components/contents/Results'

// import requests from '../utils/requests'
import Banner from '../components/landing/Banner'
import HomeNavigation from '../components/landing/HomeNavigation'
import { API_KEY, BASE_URL } from '../constants/globalVariables'
import { NextSeo } from 'next-seo'

export default function Home({
  nowPlayingMovies,
  popularMovies,
  popularShows,
  top_ratedMovies,
  top_ratedShows
}) {
  console.log('popularMovies', popularMovies)

  return (
    <div>
      <Head>
        <title>Alwi Sofwan</title>

        <link
          rel="icon"
          href="https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png"
        />
      </Head>
      {/* <NextSeo
        title="My streaming movies"
        description="A short description goes here."
        canonical="https://www.alwisofwan.com/"
      /> */}

      <Header />

      <Banner data={nowPlayingMovies} />

      <HomeNavigation results={popularShows} title="What's Popular" />
      <br />
      <HomeNavigation
        results={top_ratedMovies}
        title="Kalah Menang Nonton Ini Dulu"
      />

      {/* <Navbar />
      <Results results={results} /> */}
    </div>
  )
}

// export async function getServerSideProps(context) {
//   const genre = context.query.genre

//   const request = await fetch(
//     `https://api.themoviedb.org/3${
//       requests[genre]?.url || requests.fetchTrending.url
//     }`
//   ).then(res => res.json())

//   return {
//     props: {
//       results: request.results
//     }
//   }
// }

export async function getServerSideProps() {
  const [
    nowPlayingMoviesRes,
    popularMoviesRes,
    popularShowsRes,
    top_ratedMoviesRes,
    top_ratedShowsRes
  ] = await Promise.all([
    fetch(
      `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
    ),
    fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`),
    fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}&language=en-US&page=1`),
    fetch(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    ),
    fetch(`${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
  ])
  const [
    popularMovies,
    popularShows,
    top_ratedMovies,
    top_ratedShows,
    nowPlayingMovies
  ] = await Promise.all([
    nowPlayingMoviesRes.json(),
    popularMoviesRes.json(),
    popularShowsRes.json(),
    top_ratedMoviesRes.json(),
    top_ratedShowsRes.json()
  ])

  return {
    props: {
      nowPlayingMovies: nowPlayingMovies.results,
      popularMovies: popularMovies.results,
      popularShows: popularShows.results,
      top_ratedMovies: top_ratedMovies.results,
      top_ratedShows: top_ratedShows.results
    }
  }
}
