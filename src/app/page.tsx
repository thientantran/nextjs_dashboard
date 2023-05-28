'use client'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import React from 'react'
import scss from './Home.module.scss'
import Login from './components/Login/Login'
import Dashboard from './dashboard/page'
const Home: React.FC = () => {
  // cho nay can add type cho Home
  const { data: session } = useSession()
  return (
    <div>
      <Head>
        <title>Datasoft - Data Dashboard</title>
        <meta name='description' content='Data dashboard' />
        <meta name='viewpoint' content='width-device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={scss.main}>
        {session && (
          <>
            {/* <SideMenu /> */}
            <Dashboard />
          </>
        )}
        <Login />
      </main>
    </div>
  )
}

export default Home
