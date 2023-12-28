import * as express from "express";
import booksController from "../controllers/books.controller";

const booksRouter = express.Router();
const { getAll, add, getOne, update, remove } = booksController;


booksRouter.route("/")
.get(getAll)
.post(add);
booksRouter.route("/:id")
.get(getOne)
.put(update)
.delete(remove);


export default booksRouter;