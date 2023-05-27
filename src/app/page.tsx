"use client"
import styles from './page.module.css'
import Dashboard from './dashboard/page'
import Head from 'next/head'
import Header from './components/Header/Header'
import SideMenu from './components/SideMenu/page'
import Login from './components/Login/Login'
import { useSession } from 'next-auth/react'
export default function Home() {
  const {data: session} = useSession()
  return (
    <div>
      <Head>
        <title>Data Dashboard</title>
        <meta name="description" content='Data dashboard'/>
        <meta name='viewpoint' content='width-device-width, initial-scale=1'/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <main className={styles.main}>
      <Header/>
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
