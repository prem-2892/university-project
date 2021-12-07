import axios from 'axios'

import {
    UNIVERSITY_LIST_REQUEST,
    UNIVERSITY_LIST_SUCCESS,
    UNIVERSITY_LIST_FAIL,
    UNIVERSITY_PAGE_REQUEST,
    UNIVERSITY_PAGE_SUCCESS,
    UNIVERSITY_PAGE_FAIL,
} from '../constants/universityConstants'

export const listUniversities = () => async (dispatch) => {
    try {
        dispatch({ type: UNIVERSITY_LIST_REQUEST })

        const { data } = await axios.get('/api/universities')

        dispatch({
            type: UNIVERSITY_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: UNIVERSITY_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const listUniversityPage = (id) => async (dispatch) => {
    try {
        dispatch({ type: UNIVERSITY_PAGE_REQUEST })

        const { data } = await axios.get(`/api/universities/${id}`)

        dispatch({
            type: UNIVERSITY_PAGE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: UNIVERSITY_PAGE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}
