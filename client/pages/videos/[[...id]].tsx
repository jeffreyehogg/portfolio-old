import React from 'react'
import Layout from '../../components/Layout'
import VideoList from '../../components/VideoList'
import VideoPlayer from '../../components/VideoPlayer'
import { YOUTUBE_ALL_VIDEOS_API } from '../../lib/constants'

export default function Videos({ data }: any) {
  return (
    <Layout title='Videos'>
      <VideoPlayer />
      <VideoList data={data} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(
    `${YOUTUBE_ALL_VIDEOS_API}&key=${process.env.YOUTUBE_API_KEY}`
  )
  const data = await res.json()
  if (!data) {
    return {
      notFound: true,
    }
  }
  return {
    props: { data },
  }
}
