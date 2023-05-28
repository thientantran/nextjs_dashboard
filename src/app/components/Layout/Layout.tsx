'use client'
import { useSession } from 'next-auth/react'
import React from 'react'
import SideMenu from '../SideMenu/SideMenu'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession()
  return (
    <>
      {session && <SideMenu />}
      {children}
    </>
  )
}
