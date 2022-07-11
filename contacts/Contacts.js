import React, { useState } from 'react'
import profile from '../Assets/profile.png'
import phoneData from './contactData'

const Contacts = () => {
    const [phoneList, setPhoneList] = useState(phoneData)
    const [showList, setList] = useState(phoneData[0])
    const [name, setName] = useState('')

    const inputEvent = (e) => {
        const value = e.target.value
        setName(value)
        if (name !== '') {
            const searchContact = phoneList.filter(val => {
                return Object.values(val).join(' ').includes(name)
            })
            setPhoneList(searchContact)
        }
        else {
            setPhoneList(phoneData)
        }


    }
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-3'>
                    <ul className='contacts-list'>
                        <li><input className='search' type="text" placeholder='Search...' value={name} onChange={inputEvent} /></li>
                        {
                            phoneList.map((val) => {
                                return (
                                    <>
                                        <li className={`d-flex ${val.id === showList.id ? 'active' : ''}`} onClick={() => setList(phoneData[val.id - 1])}>
                                            <div className='img-avatar'>
                                                <img src={profile} alt='profile-img' />
                                            </div>
                                            <div className='details'>
                                                <h3>{val.first_name} {val.last_name}</h3>
                                                <p className='mb-0'>{val.phone}</p>
                                            </div>
                                        </li>
                                    </>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='col-md-9 p-4'>
                    <div className='row'>
                        <div className='col-md-6 mb-3'>
                            <div className="form-group">
                                <label for="email">First Name:</label>
                                <input type="email" className="form-control" id="email" disabled value={showList.first_name} />
                            </div>
                        </div>
                        <div className='col-md-6 mb-3'>
                            <div className="form-group">
                                <label for="email">Last Name:</label>
                                <input type="email" className="form-control" id="email" disabled value={showList.last_name} />
                            </div>
                        </div>
                        <div className='col-md-6 mb-3'>
                            <div className="form-group">
                                <label for="email">Email address:</label>
                                <input type="email" className="form-control" id="email" disabled value={showList.email} />
                            </div>
                        </div>
                        <div className='col-md-6 mb-3'>
                            <div className="form-group">
                                <label for="email">Gender:</label>
                                <input type="email" className="form-control" id="email" disabled value={showList.gender} />
                            </div>
                        </div>
                        <div className='col-md-6 mb-3'>
                            <div className="form-group">
                                <label for="email">Phone Number:</label>
                                <input type="email" className="form-control" id="email" disabled value={showList.phone} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts