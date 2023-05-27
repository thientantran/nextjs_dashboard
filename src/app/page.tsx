"use client"
import Dashboard from './dashboard/page'
import Head from 'next/head'
import SideMenu from './components/SideMenu/page'
import Login from './components/Login/Login'
import { useSession } from 'next-auth/react'
import scss from './Home.module.scss'
import React from 'react'
const Home: React.FC = () => {
  // cho nay can add type cho Home
  const {data: session} = useSession()
  return (
    <div>
      <Head>
        <title>Datasoft -  Data Dashboard</title>
        <meta name="description" content='Data dashboard'/>
        <meta name='viewpoint' content='width-device-width, initial-scale=1'/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <main className={scss.main}>
      {
        session && (<>
          <SideMenu/>
        <Dashboard/>
        
        </>)
      }
      <Login/>
    </main>
    </div>
    
  )
}

export default Home;