import React, { useState, useEffect } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

import AlertInfo from '../alerts/AlertInfo'
import AlertError from './../alerts/AlertError'
import Loader from '../components/Loader'

import Back from './../Images/back.png'

import { login } from './../actions/userActions'

//Style sheet
import './../styles/globalStyle.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passError, setPassError] = useState('')
    const [emailValidation, setEmailValidation] = useState('')
    const [passValidation, setPassValidation] = useState('')

    const navigate = useNavigate()

    const disptach = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin

    const infoData = {
        title: "ADMINISTRATOR'S LOGIN ONLY",
        subtext: 'Contact The Site Admin/Creator for an admin account!!!',
    }

    useEffect(() => {
        if (userInfo) {
            navigate('/')
        }

        //--------------------------------
        // Form Validation
        if (email === '') {
            setEmailValidation('input-validate-error')
            setEmailError('Email is required!')
        } else if (!(email.includes('@') && email.includes('.com'))) {
            setEmailValidation('input-validate-error')
            setEmailError('Invalid Email Address!')
        } else {
            setEmailValidation('input-success')
            setEmailError('')
        }

        if (password === '') {
            setPassValidation('input-validate-error')
            setPassError('Password is Required!!')
        } else {
            setPassValidation('')
            setPassError('')
        }
        //------------------------------------------------
    }, [email, password, navigate, userInfo])

    const submitHandler = (e) => {
        e.preventDefault()

        //DISPATCH
        disptach(login(email, password))
    }

    return (
        <div className='login-container'>
            <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className='back'>
                    <img src={Back} alt='' className='back-svg' />
                    <div className='bck-txt'>Home</div>
                </div>
            </Link>
            <div className='heading'>login</div>
            <AlertInfo data={infoData} wd='340px' />
            {loading && <Loader />}
            <div className='form-container'>
                <form onSubmit={submitHandler} className='form'>
                    {error && <AlertError data={error} wd='auto' />}
                    <label htmlFor='email'>E-Mail</label>
                    <input
                        type='text'
                        className={`email + ${emailValidation}`}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className='input-error'>{emailError}</div>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        className={`password + ${passValidation}`}
                        value={password}
                        onChange={
                            ((e) => setEmail(e.target.value),
                            (e) => setPassword(e.target.value))
                        }
                    />
                    <div className='input-error'>{passError}</div>
                </form>
                <button type='submit' onClick={submitHandler}>
                    <span className='text'>Login</span>
                </button>
            </div>
        </div>
    )
}

export default Login
