import React, { useEffect, useState } from 'react'
import './Account.css';
import { NavLink } from 'react-router-dom';





const SignIn = (props) => {


    const [state, setstate] = useState({ inputUser: '', inputPassword: '' })
    const [userData, updateUserData] = useState({})
    const [curUser, checkUserData] = useState('guest')
    const [logged, signIn] = useState('')


    const InputUserDetails = (e) => {
        const { id, value } = e.target;


        setstate((oldData) => {
            return {
                ...oldData, [id]: value
            }
        })


    }


    const authenticateUser = (e) => {

        e.preventDefault();
        if (!state.inputUser && state.inputPassword) {
            // alert('enter username')
            checkUserData('username')
        } else if (state.inputUser && !state.inputPassword) {
            // alert('enter password')
            checkUserData('password')
        } else if (!state.inputUser && !state.inputPassword) {
            // alert('enter valid credential')
            checkUserData('invalid')
        } else {
            const usetAuth = Object.entries(userData).filter((val) => {

                let userName;
                if (state.inputUser === val[0] && state.inputPassword === val[1].inputPassword) {
                    // console.log('user Authentic')
                    userName = state.inputUser;
                    checkUserData(userName);
                    signIn(userName)
                    props.login()



                    // console.log(userName)

                }
                return userName;
            })
            // console.log(usetAuth.length)
            if (!usetAuth.length) {
                checkUserData('incorrect');
                signIn('');
            }
        }

    }

    useEffect(() => {

        const users = localStorage.getItem('users');
        if (users) {
            updateUserData(JSON.parse(users));
        }

    }, [])
    return (
        <>



            <div className="container">
                <div className="card card-container">
                    {curUser === 'password' && (<p className='alert alert-danger text-center'><strong>Enter Password</strong></p>)}
                    {curUser === 'username' ? <p className='alert alert-danger text-center'><strong>User user name</strong></p> : ''}
                    {curUser === 'invalid' ? <p className='alert alert-danger text-center'><strong>Enter Valid Credential</strong></p> : ''}
                    {curUser === 'incorrect' ? <p className='alert alert-danger text-center'><strong>User Credential Incorrect</strong></p> : ''}
                    {logged ? <p className='alert alert-success text-center'><strong>Welcome! {logged}</strong></p> : ''}
                    <img id="profile-img" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt='user-avatar' />
                    <p id="profile-name" className="profile-name-card">Sign In</p>
                    <form className="form-signin" onSubmit={authenticateUser}>
                        <span id="reauth-email" className="reauth-email"></span>
                        <input type="text" id="inputUser" value={state.inputUser} onChange={InputUserDetails} className={`form-control ${curUser === 'username' ? 'border-danger' : curUser === 'invalid' ? 'border-danger' : ''}`} placeholder="User name" />
                        <input type="password" id="inputPassword" value={state.inputPassword} onChange={InputUserDetails} className={`form-control ${curUser === 'password' ? 'border-danger' : curUser === 'invalid' ? 'border-danger' : ''}`} placeholder="Password" />
                        <div id="remember" className="checkbox">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>
                        <button className="btn btn-lg btn-outline-danger btn-block btn-signin mt-3" type="submit">Sign in</button>
                    </form>
                    <a href="/" className="forgot-password">
                        Forgot the password?
                    </a>
                    <h5 className='text-center text-danger mb-0 mt-3'><NavLink to='/sign-up'>Create a new Account</NavLink></h5>
                </div>
            </div>
        </>
    )
}

export default SignIn
