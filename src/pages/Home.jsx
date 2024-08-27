import React from 'react'
import Banner from '../components/Banner'
import Featured from '../components/Featured'
import Leatest from '../components/Leatest'
import Shopex from '../components/Shopex'
import Trending from '../components/Trending'
import TrendingProducts from '../components/TrendingProducts'
import Discount from '../components/Discount'
import Get from '../components/Get'
import LatestBlog from '../components/LatestBlog'



const Home = () => {
  return (
    <>
    <Banner/>
    <Featured/>
    <Leatest/>
    <Shopex/>
    <Trending/>
    <TrendingProducts/>
    <Discount/>
    <TopCategories/>
    <Get/>
    <LatestBlog/>
    </>
  )
}

export default Home
