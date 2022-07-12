const { Router } = require('express')
const { Country, Activity } = require('../db.js')
const { Op } = require('sequelize')
const axios = require('axios')
const router = Router();


router.get('/', async (req, res) => {


    let countriesAllDb = await Country.findAll({ include: { model: Activity } });


    // if para validar 

    if (countriesAllDb.length === 0) {

        const { data } = await axios.get('https://restcountries.com/v3/all')



        const allCountries = data.map(e => {
            return {
                id: e.cca3,
                name: e.name.common,
                flags: e.flags[0],
                continent: e.continents[0],
                capital: e.capital === undefined ? "capital no definida" : e.capital[0],
                subregion: e.subregion,
                area: Number(e.area),
                population: Number(e.population)
            }
        })

        await allCountries.forEach(async (cont) => {
            await Country.create(
                cont
            )
        });

        return res.json(allCountries)

    }


    return res.json(countriesAllDb)



})


//GET /countries?name="..." busqueda por name
router.patch('/', async (req, res) => {
    const { name } = req.query
    try {
        const countries = await Country.findAll({
            include: { model: Activity },
            where: {
                name: {
                    [Op.iLike]: '%' + name + '%'
                }
            }
        })
        if (!countries) return res.status(404).send(`No existe un pais con el nombre ${name}`)
        res.status(200).json(countries)
    } catch (e) {
        res.status(404).json(e.message)
    }
})





// GET countries/id
router.get('/:id', async (req, res) => {

    const id = req.params.id
    const cnt = await Country.findByPk(id, { include: { model: Activity } })
    res.status(200).json(cnt)

})


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
