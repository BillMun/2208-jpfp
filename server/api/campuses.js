const router = require('express').Router()
const {Campus, Student} = require('../db')

//get /api/campuses all campuses
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

//get /api/campuses/:id single campus

router.get('/:id', async (req,res,next)=>{
    try{
        const campus = await Campus.findByPk((req.params.id),{
            include:{
                model: Student
            }
        })
        res.send(campus)
    }catch(err){
        next(err)
    }
})

//post /api/campuses/:id
router.post('/', async (req,res,next)=>{
    try{
        res.status(201).send(await Campus.create(req.body))
    }catch(error){next(error)}
})

//delete /api/campuses/:id
router.delete('/:id', async (req,res,next)=>{
    try{
        const campus = await Campus.findByPk((req.params.id),{
            include:{
                model: Student
            }
        })
        await campus.destroy()
        res.send(campus)
    }catch(error){
        next(error)
    }
})

//update/put /api/campuses/:id
router.put('/:id', async (req,res,next)=>{
    try{
        const campus = await Campus.findByPk((req.params.id),{
            include:{
                model: Student
            }
        })
        res.send(await campus.update(req.body))
    }catch(error){next(error)}
})

module.exports = router