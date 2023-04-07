const { simplifyRequest } = require('../../tools/sql.tools.js')
const mapQueries = require('./map.queries.js')

const pool = require('../../db.js')

async function schedule(req, res) {
    try {
        const date = new Date()
        const day = date.getDate().toString()
        const month = (date.getMonth() + 1).toString()
        const hour1 = date.getHours() % 2 === 0 ? date.getHours() : date.getHours() - 1
        // const hour1 = 16
        const hour2 = hour1 + 2
        const dates = [day, month, hour1, hour2]
        let timeSlots = await pool.query(mapQueries.schedule, dates)
        timeSlots = simplifyRequest(timeSlots.rows, 'id_personne', 'libelle_service')
        res.status(200).send(timeSlots)
    }
    catch(e) {
        console.log(e)
        res.status(400).send('Err: ' + e.message)
    }
}


module.exports = { schedule }