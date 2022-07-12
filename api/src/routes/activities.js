const { Router } = require('express')
const { Country, Activity } = require('../db.js')
const { Op } = require('sequelize');
const router = Router();
// formulario POST

router.post('/', async (req, res) => {
    try {
        const activity = req.body


        let act = await Activity.create({
            name: activity.name,
            difficulty: activity.difficulty,
            duration: activity.duration,
            season: activity.season

        });

        await act.addCountry(activity.id)
        return res.status(200).json(true)

    } catch (error) {

        res.status(404).json({ mensaje: 'no se encontró la información', ...error })
    }

})
//buscar el país
//actualizar el país
//guardar los cambio en el país bsd



module.exports = router







