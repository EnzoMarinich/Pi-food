const {Router} = require("express")
const { getRecipeHandler, getRecipeByIdHandler, postRecipeHandler } = require("../handlers/recipesHandler")

const recipesRouter = Router()

recipesRouter.get("/", getRecipeHandler )

recipesRouter.get("/:id", getRecipeByIdHandler)

recipesRouter.post("/", postRecipeHandler)

module.exports = recipesRouter;