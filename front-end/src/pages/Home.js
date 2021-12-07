import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

// AXIOS for handling HTTP request
//import axios from 'axios';

// Components
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Card from './../components/Card'
import Notice from '../components/Notice'
import Loader from '../components/Loader'

// ALERTS
import AlertError from '../alerts/AlertError'

//ACTIONS
import { listUniversities } from '../actions/universityAction'

// Data during development phase
//import unis from './../data/unis.js';

//Style sheet
import './../styles/globalStyle.css'

const Home = () => {
    const dispatch = useDispatch()

    const universityList = useSelector((state) => state.universityList)
    const { loading, error, universities } = universityList
    const errorData = {
        title: error,
    }

    useEffect(() => {
        dispatch(listUniversities())
    }, [dispatch])

    return (
        <div className='home'>
            <Navbar />
            <Search />
            <Notice />
            {loading ? (
                <Loader />
            ) : error ? (
                <AlertError data={errorData} />
            ) : (
                <div className='unis-grid'>
                    {universities.map((university) => (
                        <Card university={university} key={university._id} />
                    ))}
                </div>
            )}

            <div className='footer'>
                <div>Made with React!</div>
                <div className='me'>&#169;{'  '}Prem Goswami</div>
            </div>
        </div>
    )
}

export default Home
