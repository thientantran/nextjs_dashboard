import styles from './page.module.css'
import Dashboard from './dashboard/page'
import Head from 'next/head'
import Header from './components/Header/page'
import SideMenu from './components/SideMenu/page'
import Login from './components/Login/page'
export default function Home() {
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
      <SideMenu/>
      <Dashboard/>
      <Login/>
    </main>
    </div>
    
  )
}
