import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem, Switch, FormControlLabel, FormGroup } from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch } from 'react-redux/es/exports';
import { themeMode } from '../../actions/Actions';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff',
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
        width: 32,
        height: 32,
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
    },
}));

const Header = (props) => {
    const pages = { 'Home': '/', 'Projects': '/projects', 'Users': '/users-data', 'Sign Up': '/sign-up' };
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

    const [anchorSideMenu, handleOpenSideMenu] = useState(null)
    const [anchorMenuUser, handleOpenUserMenu] = useState(null)

    const dispatcherMode = useDispatch()



    return (
        <>

            <AppBar position="fixed" color="primary" sx={{ height: { lg: '70px' } }}>

                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                color="inherit"
                                onClick={(e) => handleOpenSideMenu(e.currentTarget)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorSideMenu}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                                open={Boolean(anchorSideMenu)}
                                onClose={() => handleOpenSideMenu(null)}
                            >

                                {
                                    Object.entries(pages).map((page, ind) => {
                                        return (
                                            <NavLink key={ind} to={page[1]} onClick={() => handleOpenSideMenu(null)}>
                                                <Button
                                                    sx={{ my: 2, mx: 4, color: '#000', display: 'block' }}
                                                >
                                                    {page[0]}
                                                </Button>
                                            </NavLink>
                                        )
                                    })
                                }
                                {/* <MenuItem >
                    <Typography textAlign="center">Home</Typography>
                </MenuItem>
                <MenuItem >
                    <Typography textAlign="center">Projects</Typography>
                </MenuItem>
                <MenuItem >
                    <Typography textAlign="center">Users</Typography>
                </MenuItem> */}
                            </Menu>
                        </Box>
                        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between', alignItems: 'center', mr: 4 }}>
                            <Box sx={{ display: 'flex' }}>
                                {
                                    Object.entries(pages).map((page, ind) => {
                                        return (
                                            <NavLink key={ind + 1} to={page[1]}>
                                                <Button
                                                    sx={{ my: 2, mx: 4, color: 'white', display: 'block' }}
                                                >
                                                    {page[0]}
                                                </Button>
                                            </NavLink>
                                        )
                                    })
                                }
                            </Box>


                            {/* <ColorsTheme changeColor={applyColorTheme} /> */}
                            <Box>
                                <FormGroup>
                                    <FormControlLabel
                                        control={<MaterialUISwitch sx={{ m: 1 }} onChange={(e) => dispatcherMode(themeMode(e.target.checked))} />}
                                        label="Switch Mode"
                                    />
                                </FormGroup>
                            </Box>



                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={(e) => handleOpenUserMenu(e.currentTarget)} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                anchorEl={anchorMenuUser}
                                id="menu-appbar"
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorMenuUser)}
                                onClose={() => handleOpenUserMenu(null)}
                            >
                                {settings.map((setMenu, index) => (
                                    <MenuItem key={index} onClick={() => handleOpenUserMenu(null)}>
                                        <Typography textAlign="center">{setMenu}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            <Outlet />
        </>
    )
}

export default Header
