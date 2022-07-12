const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countriesMiddleware = require('./countries')
const activitiesMiddleware = require('./activities')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', countriesMiddleware);
router.use('/activities', activitiesMiddleware);


module.exports = router;