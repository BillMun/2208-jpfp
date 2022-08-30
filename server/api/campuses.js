const router = require('express').Router()
const {Campus, Student} = require('../db')

//get /api/campuses
router.get('/', async (req,res,next)=>{
    try{
        const campuses = await Campus.findAll({
            include:{
                model:Student
            }
        })
        res.send(campuses)
    }
    catch(err){
        next(err)
    }
})

module.exports = router