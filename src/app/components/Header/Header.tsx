'use client'

import AdbIcon from '@mui/icons-material/Adb'
import { useMediaQuery } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { signIn, signOut, useSession } from 'next-auth/react'
import * as React from 'react'
import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton'


export type HeaderProps = {
  ColorModeContext: React.Context<{ toggleColorMode: () => void }>
}

const Header = (props: HeaderProps) => {
  const { ColorModeContext } = props
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)
  const { data: session } = useSession()
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const tabletCheck = useMediaQuery('(min-width: 768px)')

  return (
    <AppBar position='static' sx={{ marginBottom: "40px" }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            DataSoft
          </Typography>

          {tabletCheck && (
            <Box sx={{ paddingRight: 3, marginLeft: "auto" }}>
              <Typography>{session ? `Signed in as ${session?.user?.email}` : ''} </Typography>
            </Box>
          )}

          <ThemeToggleButton ColorModeContext={ColorModeContext} />
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title='Open Profile settings'>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={session?.user?.name as string} src={session?.user?.image as string} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem
                onClick={() => {
                  session ? signOut() : signIn()
                }}
              >
                <Typography textAlign='center'>{session ? 'Logout' : 'Login'}</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Header
