import React, { useState, useEffect } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

// import AlertInfo from '../alerts/AlertInfo'
import AlertError from './../alerts/AlertError'
import AlertSuccess from '../alerts/AlertSuccess'
import Loader from './../components/Loader'

import Back from './../Images/back.png'

import { getUserDetails, updateUserProfile } from './../actions/userActions'

//Style sheet
import './../styles/globalStyle.css'

const Profile = () => {
    // Name
    const [name, setName] = useState('')
    const [nameError, setNameError] = useState('')
    const [nameValidation, setNameValidation] = useState('')

    // Email
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [emailValidation, setEmailValidation] = useState('')

    // Password
    const [password, setPassword] = useState('')
    // const [passError, setPassError] = useState('')
    // const [passValidation, setPassValidation] = useState('')

    // Confirm Password
    const [confirmPassword, setConfirmPassword] = useState('')
    const [confirmValidation, setConfimValidation] = useState('')
    const [confirmError, setConfirmError] = useState('')

    // General Error
    const [generalError, setGeneralError] = useState('')

    const navigate = useNavigate()

    const disptach = useDispatch()

    const userDetails = useSelector((state) => state.userDetails)
    const { error, loading, user } = userDetails

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
    const { success } = userUpdateProfile

    useEffect(() => {
        if (!userInfo) {
            navigate('/login')
        } else {
            if (!user.name) {
                disptach(getUserDetails('profile'))
            } else {
                setName(user.name)
                setEmail(user.email)
            }
        }

        //------------------------------------------------
    }, [navigate, userInfo, disptach, user])

    useEffect(() => {
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

        if (name === '') {
            setNameError('Name cannot be empty')
            setNameValidation('input-validate-error')
        } else if (name.split(' ')[1] === '') {
            setNameError('Name is too short!')
            setNameValidation('input-validate-error')
        } else {
            setNameError('')
            setNameValidation('')
        }

        // if (password === '') {
        //     setPassValidation('input-validate-error')
        //     setPassError('Password is Required!!')
        // } else {
        //     setPassValidation('')
        //     setPassError('')
        // }

        if (password !== confirmPassword) {
            setConfimValidation('input-validate-error')
            setConfirmError('Passwords Do Not MATCH!!')
        } else {
            setConfimValidation('')
            setConfirmError('')
        }
    }, [name, email, password, confirmPassword])

    const submitHandler = (e) => {
        e.preventDefault()

        //DISPATCH
        if (nameError === '' && emailError === '' && confirmError === '') {
            setGeneralError('')
            disptach(updateUserProfile({ id: user._id, name, email, password }))
        } else {
            setGeneralError('Unsolved Errors!')
        }
    }

    return (
        <div className='login-container'>
            <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className='back'>
                    <img src={Back} alt='' className='back-svg' />
                    <div className='bck-txt'>Home</div>
                </div>
            </Link>
            <div className='heading'>Profile</div>
            {loading && <Loader />}
            <div className='form-container'>
                <form onSubmit={submitHandler} className='form'>
                    {error && <AlertError data={error} />}
                    {generalError && (
                        <AlertError
                            data={generalError}
                            cls='custom-login-error'
                        />
                    )}
                    {success && (
                        <AlertSuccess
                            data='Profile Updated!'
                            cls='custom-login-error'
                        />
                    )}
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        className={`name + ${nameValidation}`}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <div className='input-error'>{nameError}</div>
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
                        className={`password`}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <label htmlFor='confirm-password'>Confirm Password</label>
                    <input
                        type='password'
                        className={`password + ${confirmValidation}`}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <div className='input-error'>{confirmError}</div>
                </form>
                <button type='submit' onClick={submitHandler}>
                    <span className='text'>Update</span>
                </button>
            </div>
        </div>
    )
}

export default Profile
