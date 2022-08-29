// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require('./database')
const Student = require('./student')
const Campus = require('./campus')

const syncAndSeed = async () => {
    await db.sync({ force: true });
    const fullStack = await Campus.create({
      name: 'Full Stack',
      address: '1337 Campus Drive, Charlottesville VA, 22902',
      description: 'A great place to live, work, and study. Learn to code at this campus extension.',
 
    })

    const marketing = await Campus.create({
      name: 'Marketing Academy',
      address: '480 Library Lane, Castro Valley CA, 94507',
      description: 'A fun place to learn the ins and outs of social media marketing',

    })

    const bill = await Student.create({
      firstName: 'Bill',
      lastName: 'Munkacsy',
      email: 'example@gmail.com',
      gpa: '4.0',
      campusId: fullStack.id,

    })

    const megan = await Student.create({
      firstName: "Megan",
      lastName: "Munkacsy",
      email: 'example2@gmail.com',
      gpa: 4.0,
      campusId: marketing.id,

    })

    const matt = await Student.create({
      firstName: 'Matt',
      lastName: 'Lawless',
      email: 'example3@gmail.com',
      gpa: 3.8,
      campusId: fullStack.id,

    })

    //use this area to sync your database
    console.log(`
    Seeding successful`)
  ;
};

Student.belongsTo(Campus)
Campus.hasMany(Student)



module.exports = {
    // Include your models in this exports object as well!
    db,
    syncAndSeed,
    Campus,
    Student,
}