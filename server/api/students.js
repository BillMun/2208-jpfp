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
//create student /api/students
router.post('/', async (req,res,next)=>{
    try{
        let newStudent = await Student.create(req.body)
        let newStuduentId = newStudent.dataValues.id
        let student = await Student.findByPk(newStuduentId,{
            include:{
                model:Campus
            }
        })
        res.status(201).send(student)
    }catch(error){next(error)}
})

//delete student /api/students/:id
router.delete('/:id', async (req,res,next)=>{
    try{
    const student = await Student.findByPk((req.params.id),{
        include:{
            model: Campus
        }
    })
    await student.destroy()
    res.send(student)
    }catch(error){next(error)}
})

//update or put /api/students/:id
router.put('/:id', async (req,res,next)=>{
    try{
        const student = await Student.findByPk((req.params.id),{
            include:{
                model: Campus
            }
        })
        await student.update(req.body)
        const updatedStudent = await Student.findByPk((req.params.id),{
            include:{
                model: Campus
            }
        })
        res.send(updatedStudent)
    }catch(error){
        next(error)
    }
})

module.exports = router