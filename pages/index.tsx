import Head from 'next/head'
import Image from 'next/image'
import App from '@/components/App/App';
export default function Home() {
  return (
    <>
      <Head>
        <title>ChatGPTPlus</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <App />
    </>
  )
}
