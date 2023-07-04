const { Router } = require('express');
const recipesRouter = require('./recipesRouter');
const dietsRouter = require('./dietsRouter');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const mainRouter = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
mainRouter.use("/recipes", recipesRouter)

mainRouter.use("/diets", dietsRouter)

module.exports = mainRouter;
