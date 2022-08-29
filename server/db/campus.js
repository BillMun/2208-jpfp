const db = require('./database')
const Sequelize = require('sequelize')

const Campus = db.define('campus', {
    name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    imageUrl:{
        type: Sequelize.STRING,
        defaultValue: 'https://www.seekpng.com/png/detail/897-8977124_png-file-svg-campus-icon-png.png'
    },
    address:{
        type: Sequelize.STRING,
        allowNull: false
    },
    description:{
        type: Sequelize.TEXT
    }
})

module.exports= Campus