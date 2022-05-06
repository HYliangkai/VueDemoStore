module.exports = (app) => {
    const express = require('express')
    const route = express.Router({ mergeParams: true })
    app.use('/webapi', route)
}