const {Router} = require("express")
const { getRecipeHandler, getRecipeByIdHandler, postRecipeHandler } = require("../handlers/recipesHandler")
const multer = require("multer")


const storage = multer.memoryStorage();
const upload = multer({storage})
const recipesRouter = Router()

recipesRouter.get("/", getRecipeHandler )

recipesRouter.get("/:id", getRecipeByIdHandler)

recipesRouter.post("/", upload.single('image'),postRecipeHandler)

module.exports = recipesRouter;