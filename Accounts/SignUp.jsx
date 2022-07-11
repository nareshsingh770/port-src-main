import React, { useEffect, useState } from 'react'
import './Account.css';

const SignUp = () => {
    const records = () => {
        const allUsers = JSON.parse(localStorage.getItem('users'));
        if (allUsers) {
            return allUsers
        } else {
            return {}
        }
    }


    const [state, setstate] = useState({ inputUser: '', inputEmail: '', inputPassword: '' })
    const [addUsers, setUsers] = useState(records)


    const InputUserDetails = (e) => {
        console.log(e.target.id)
        const { id, value } = e.target;


        setstate((oldData) => {
            return {
                ...oldData, [id]: value
            }
        })
    }

    const addUser = (e) => {
        e.preventDefault();
        setUsers((oldData) => {
            return {
                ...oldData, [state.inputUser]: state
            }
        })
        setstate({ inputUser: '', inputEmail: '', inputPassword: '' });
    }


    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(addUsers));
    }, [addUsers])
    return (
        <>
            <div className="container">
                <div className="card card-container">
                    <img id="profile-img" className="profile-img-card" alt="user" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
                    <p id="profile-name" className="profile-name-card">Sign Up</p>
                    <form className="form-signin" onSubmit={addUser}>
                        <span id="reauth-email" className="reauth-email"></span>
                        <input type="text" id="inputUser" value={state.inputUser} onChange={InputUserDetails} className="form-control" placeholder="User name" required />
                        <input type="email" id="inputEmail" value={state.inputEmail} onChange={InputUserDetails} className="form-control" placeholder="Email address" required />
                        <input type="password" id="inputPassword" value={state.inputPassword} onChange={InputUserDetails} className="form-control" placeholder="Password" required />

                        <button className="btn btn-lg btn-outline-danger btn-block btn-signin mt-3" type="submit">Create Account</button>
                    </form>

                </div>
            </div>
        </>
    )
}

export default SignUp
