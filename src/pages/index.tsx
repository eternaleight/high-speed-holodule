import type { NextPage } from 'next'
import Header from '../components/Header'
import Main from '../components/Main'
import { HeadMeta } from '../components/Head'


const Home: NextPage = () => {
  return (
    <div>
      <HeadMeta/>
      <Header/>
      <Main/>
    </div>
  )
}

export default Home
