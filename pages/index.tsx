import React from 'react'
import Head from 'next/head'
import Header from '../components/header/Header'
// import Navbar from '../components/header/Navbar'
// import Results from '../components/contents/Results'

import requests from '../utils/requests'
import Banner from '../components/landing/Banner'
import HomeNavigation from '../components/landing/HomeNavigation'

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Alwi Sofwan</title>

        <link
          rel="icon"
          href="https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png"
        />
      </Head>

      <Header />

      <Banner />

      <HomeNavigation title="What's Popular" />
      <br />
      <HomeNavigation title="Free To Watch" />

      {/* <Navbar />
      <Results results={results} /> */}
    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then(res => res.json())

  return {
    props: {
      results: request.results
    }
  }
}
