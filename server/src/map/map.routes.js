const mapControllers = require('./map.controllers.js')
const express = require('express')
const router = express.Router()

const cache = require('../../routeCache.js')   // Mise en cache


router.get('/',cache(200), mapControllers.schedule)    // Mise en cache

module.exports = router