'use client'
import { useSession } from 'next-auth/react'
import React from 'react'
import scss from '../../Home.module.scss'
import SideMenu from '../SideMenu/SideMenu'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession()
  return (
    <div className={scss.main}>
      {session && <SideMenu />}
      {children}
    </div>
  )
}
