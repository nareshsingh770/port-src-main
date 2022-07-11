import React from 'react'
import Restuarant from './MiniProjects/Restuarants/Restuarant';
import { Route, Routes } from 'react-router-dom';
import Weather from './MiniProjects/Weather/Weather';
import NumberRed from './MiniProjects/NumberReducer/NumberRed';
import TodoList from './MiniProjects/TodoList/TodoList';
import Home from './Home';
import Users from './components/Users';
import SignUp from './Accounts/SignUp';
import SignIn from './Accounts/SignIn';
import ProtectedRoutes from './ProtectedRoutes'
import Header from './components/header/Header';
import Projects from './MiniProjects/Projects';
import Contacts from './contacts/Contacts';
import { ThemeProvider, createTheme } from '@mui/material';
import { red } from '@mui/material/colors';
import { useSelector } from 'react-redux';


const Auth = () => {
    const colorM = useSelector((state) => state.colorThemeApplied)

    const theme = createTheme({
        palette: {
            mode: colorM ? 'dark' : 'light',
            primary: {
                main: red['A400']
            }
        }
    })
    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path='/' element={<ProtectedRoutes />} >
                    <Route path='/' exact element={<Header />} >
                        <Route index path='/' exact element={<Home />} />
                        <Route path='/projects' exact element={<Projects />} />
                        <Route path='/projects/restuarant' exact element={<Restuarant />} />
                        <Route path='/projects/weather' element={<Weather />} />
                        <Route path='/projects/number-with-reducer' element={<NumberRed />} />
                        <Route path='/projects/todo-list' element={<TodoList />} />
                        <Route path='/projects/contacts' element={<Contacts />} />
                        <Route path='/users-data' element={<Users />} />
                    </Route>
                </Route>
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/sign-in' element={<SignIn />} />
            </Routes>
        </ThemeProvider>
    )
}

export default Auth