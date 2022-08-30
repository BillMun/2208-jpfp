const router = require('express').Router()
const {Campus, Student} = require('../db')

//get /api/students
router.get('/', async (req,res,next)=>{
    try{
        const students = await Student.findAll({
            include:{
                model:Campus
            }
        })
        res.send(students)
    }
    catch(err){
        next(err)
    }
})
//single student /api/students/:id
router.get('/:id', async (req,res,next)=>{
    try{
        const student = await Student.findByPk((req.params.id),{
            include:{
                model: Campus
            }
        })
        res.send(student)
    }catch(err){
        next(err)
    }
})

module.exports = router