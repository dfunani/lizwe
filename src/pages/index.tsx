import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Landing from '@/components/landing-page'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>🌎Lizwe🌎</title>
        <meta name="description" content="Everything about the world we live in" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
         <Landing/>
      </main>
    </>
  )
}
