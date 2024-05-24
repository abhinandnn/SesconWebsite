import React from 'react'
import axios from '@/api/axios'
function Home() {
  return (
    <div>Home</div>
  )
}

export default Home

export async function getStaticProps() {
  
    return {
      props: {
        posts,
      },
    }
  }