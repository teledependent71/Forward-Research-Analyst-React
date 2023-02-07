import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Forward Research Analyst</title>
        <meta property="og:title" content="Forward Research Analyst" />
      </Helmet>
    </div>
  )
}

export default Home
