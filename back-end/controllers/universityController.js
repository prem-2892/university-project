import University from './../models/universityModel.js'
import asyncHandler from 'express-async-handler'

// @desc   Fetch ALL Universities
// @Route  GET/ api/universities
// @access Public
const getUniversities = asyncHandler(async (req, res) => {
    const universities = await University.find({})

    res.json(universities)
})

// @desc   Fetch specific University
// @Route  GET/ api/universities/:id
// @access Public
const getUniversityById = asyncHandler(async (req, res) => {
    const university = await University.findById(req.params.id)

    if (university) {
        res.json(university)
    } else {
        res.status(404)
        throw new Error('University Not Found')
    }
})

export { getUniversities, getUniversityById }
