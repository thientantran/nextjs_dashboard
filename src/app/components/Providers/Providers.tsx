"use client";

import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { Box, CssBaseline, IconButton, ThemeProvider, createTheme, useTheme } from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
interface Props {
  children: ReactNode;
}

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const Providers = ({children}: Props) => {

  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return(
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
    <SessionProvider>
      <CssBaseline/>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
          color: 'text.primary',
          borderRadius: 1,
          p: 3,
        }}
      >
        {theme.palette.mode} mode
        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>
      {children}
      </SessionProvider>;
    </ThemeProvider>
  </ColorModeContext.Provider>)
};
export default Providers;