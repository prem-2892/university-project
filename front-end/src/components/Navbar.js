import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Logo from './../Images/graduation.png'
import { Link } from 'react-router-dom'

//Style sheet
import './../styles/globalStyle.css'
import { logout } from '../actions/userActions'

const Navbar = () => {
    const disptach = useDispatch()
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        disptach(logout())
    }

    return (
        <div className='nav-row'>
            <img src={Logo} alt='Logo' className='logo' />
            {userInfo ? (
                <div className='dropdown'>
                    <button className='dropbtn'>
                        {userInfo.name.split(' ')[0]}
                    </button>
                    <div className='dropdown-content'>
                        <Link
                            to='/profile'
                            style={{
                                textDecoration: 'none',
                                width: 'inherit',
                            }}
                            className='a'
                        >
                            Profile
                        </Link>
                        <button className='logout' onClick={logoutHandler}>
                            Logout
                        </button>
                    </div>
                </div>
            ) : (
                <div className='login'>
                    <Link
                        to='/login'
                        style={{
                            textDecoration: 'none',
                            color: 'inherit',
                            width: 'inherit',
                        }}
                    >
                        Login
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Navbar
