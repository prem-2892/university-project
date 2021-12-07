import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listUniversityPage } from '../actions/universityAction'

//Style sheet
import './../styles/globalStyle.css'

// AXIOS for handling HTTP request
//import axios from 'axios';

import Loader from './../components/Loader'

// Accessing parameters
import { useParams, Link } from 'react-router-dom'

// Resource
import Back from './../Images/back.png'

const UnisPage = () => {
    //const [unis, setUnis] = useState([]);
    const dispatch = useDispatch()
    const { id } = useParams()

    const universityPage = useSelector((state) => state.universityPage)
    const { loading, error, university } = universityPage

    useEffect(() => {
        dispatch(listUniversityPage(id))
        console.log(id)
    }, [dispatch, id])

    return (
        <>
            {loading ? (
                <Loader />
            ) : error ? (
                <h3>{error}</h3>
            ) : (
                <div className='uni-main'>
                    <Link
                        to={'/'}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        <div className='back'>
                            <img src={Back} alt='' className='back-svg' />
                            <div className='bck-txt'>Home</div>
                        </div>
                    </Link>
                    <div className='heading'>{university.name}</div>
                    <div className='container'>
                        <div className='grid-container'>
                            <div className='uni-row'>
                                <div className='props'>Course:</div>
                                <div className='value'>{university.course}</div>
                            </div>
                            <div className='uni-row'>
                                <div className='props'>Location:</div>
                                <div className='value'>
                                    {university.location}
                                </div>
                            </div>
                            <div className='uni-row'>
                                <div className='props'>State:</div>
                                <div className='value'>{university.state}</div>
                            </div>
                            <div className='uni-row'>
                                <div className='props'>Academic:</div>
                                <div className='value'>
                                    {university.academic}
                                </div>
                            </div>
                            <div className='uni-row'>
                                <div className='props'>Weather:</div>
                                <div
                                    className='value'
                                    style={{ color: 'orange' }}
                                >
                                    {university.weather}
                                </div>
                            </div>
                            <div className='uni-row'>
                                <div className='props'>IELTS:</div>
                                <div className='value'>
                                    <div style={{ color: '#4ad395' }}>
                                        {university.ielts}
                                    </div>
                                    <div className='sub-txt'>
                                        {university.desc}
                                    </div>
                                </div>
                            </div>
                            <div className='uni-row'>
                                <div className='props'>GRE:</div>
                                <div className='value'>
                                    <div style={{ color: '#4ad395' }}>
                                        {university.gre}
                                    </div>
                                </div>
                            </div>
                            <div className='line'></div>
                            <div className='uni-row'>
                                <div className='props'>
                                    1<sup>st</sup> Year Tuition Fees:
                                </div>
                                <div className='value'>
                                    {university.tuition}
                                </div>
                            </div>
                            <div className='uni-row'>
                                <div className='props'>Other Living Costs:</div>
                                <div className='value'>{university.other}</div>
                            </div>
                            <div
                                className='uni-row'
                                style={{ color: '#FFFF00' }}
                            >
                                <div className='props'>
                                    <div>Deadline</div>
                                    <div>Sept 2022</div>
                                </div>
                                <div className='value'>
                                    {university.deadline}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default UnisPage
