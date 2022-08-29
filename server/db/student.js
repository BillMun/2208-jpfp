const db = require('./database')
const Sequelize = require('sequelize')


const Student = db.define('student', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allownNull:false,
        validate: {
            isEmail:true
        }
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'https://www.nmeaf.org/sites/default/themes/nichols/images/icon-student.png'
    },
    gpa:{
        type: Sequelize.DECIMAL,
        allowNull: false,
        validate:{
            min: 0,
            max: 4.0
        }
    }
})

module.exports=Student