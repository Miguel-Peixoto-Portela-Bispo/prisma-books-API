import * as express from "express";
import categoriesController from "../controllers/categories.controller";

const categoriesRouter = express.Router();
const { getAll, add, getOne, update, remove } = categoriesController;

categoriesRouter.route("/")
.get(getAll)
.post(add);
categoriesRouter.route("/:id")
.get(getOne)
.put(update)
.delete(remove);

export default categoriesRouter;

