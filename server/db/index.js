// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require('./database')
const Student = require('./student')
const Campus = require('./campus')

const syncAndSeed = async () => {
    await db.sync({ force: true });
    const partialStack = await Campus.create({
      name: 'Partial Stack',
      address: '1337 Campus Drive, Charlottesville VA, 22902',
      description: 'A great place to live, work, and study. Learn to code at this campus extension.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUlgN73aiy_ZtjoX-5HMDOAsQ1QkSZX1lv9A&usqp=CAU'
    })

    const marketing = await Campus.create({
      name: 'Marketing Academy',
      address: '480 Library Lane, Castro Valley CA, 94507',
      description: 'A fun place to learn the ins and outs of social media marketing',
      imageUrl: 'https://i.pinimg.com/originals/5d/dc/68/5ddc68170e4d9bb82fbf8194ad5a09ac.jpg'
    })

    const art = await Campus.create({
      name: 'Art Academy',
      address: '200 Art Lane, Spring Field VA, 21030',
      description: 'New art academy desperately trying to get students',
      imageUrl: 'https://i.pinimg.com/originals/af/25/f4/af25f4385ac25e700c8f9e87b7830c4a.jpg'
    })

    const bill = await Student.create({
      firstName: 'Bill',
      lastName: 'Munkacsy',
      email: 'example@gmail.com',
      gpa: 4.0,
      campusId: partialStack.id,
      imageUrl: 'https://i.pinimg.com/736x/b7/48/e9/b748e9333aae8b191e7e151064fb9a6f.jpg'
    })

    const megan = await Student.create({
      firstName: "Megan",
      lastName: "Munkacsy",
      email: 'example2@gmail.com',
      gpa: 4.0,
      campusId: marketing.id,
      imageUrl: 'https://hairstylecamp.com/wp-content/uploads/Urara-Shiraishi.jpg.webp'
    })

    const matt = await Student.create({
      firstName: 'Matt',
      lastName: 'Lawless',
      email: 'example3@gmail.com',
      gpa: 3.8,
      campusId: partialStack.id,
      imageUrl: 'https://i.pinimg.com/236x/a4/2c/66/a42c667a281d07b152f0e2df08840f32.jpg'
    })

    const kim = await Student.create({
      firstName: 'Kim',
      lastName: 'Chabot',
      email: '1337fun@gmail.com',
      gpa: 3.9,
      imageUrl: 'https://preview.redd.it/uxtb92vgw7p81.png?width=640&crop=smart&auto=webp&s=02ecea5ebb01d84d9d1d007a391353e54eaf77f4'
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