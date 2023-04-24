import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Landing from '@/components/landing-page'
import { useState } from 'react'
import Login from './Login'


const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  const [page, setPage] = useState('landing')
  const landingData: string[][] = [["Title1", "Description of the first slide and what can be expected on Get Started"],
  ["Title2", "Description of the first slide and what can be expected on Get Started"],
  ["Title3", "Description of the first slide and what can be expected on Get Started"]]
  return (
    <>
      <Head>
        <title>🌎Lizwe🌎</title>
        <meta name="description" content="Everything about the world we live in" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        {page === "landing" && <Landing setPage={setPage} data={landingData}/>}
        {page === "login" && <Login />}
      </main>
    </>
  )
}
