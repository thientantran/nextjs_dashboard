'use client'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { SessionProvider } from 'next-auth/react'
import React, { ReactNode } from 'react'
import Header from '../Header/Header'
import darkThemeOption from '../theme/darkTheme'
import lightThemeOption from '../theme/lightTheme'
interface Props {
  children: ReactNode
}

const ColorModeContext = React.createContext({ toggleColorMode: () => { } })

const Providers = ({ children }: Props) => {
  const [mode, setMode] = React.useState<'light' | 'dark'>('dark')

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      }
    }),
    []
  )

  // const theme = React.useMemo(
  //   () =>
  //     createTheme({
  //       palette: {
  //         mode,
  //       },
  //     }),
  //   [mode],
  // );

  // const lightThemeChosen = createTheme({...lightTheme})
  // const darkThemeChosen = createTheme({...darkTheme})

  const darkTheme = React.useMemo(
    () =>
      createTheme({
        ...darkThemeOption
      }),
    []
  )

  const lightTheme = React.useMemo(
    () =>
      createTheme({
        ...lightThemeOption
      }),
    []
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={mode === 'dark' ? darkTheme : lightTheme}>
        <SessionProvider>
          <CssBaseline />
          <Header ColorModeContext={ColorModeContext} />
          {children}
        </SessionProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
export default Providers
