import db from './database'
import { Sequelize } from 'sequelize'


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
        default: 'https://www.nmeaf.org/sites/default/themes/nichols/images/icon-student.png'
    },
    gpa:{
        type: Sequelize.DECIMAL,
        validate:{
            Min: 0,
            Max: 4.0
        }
    }
})

export default Student