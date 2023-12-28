import * as express from "express";
import booksRouter from "./routes/books.route";
import categoriesRouter from "./routes/categories.route";
// import instantiateDb from "./services/dbService";

const app = express.default();

// instantiateDb().then(()=>console.log("instantiated..."));

app.use(express.json());
app.use(express.static("public"));
app.use("/books", booksRouter);
app.use("/categories", categoriesRouter);

app.listen(8080, ()=>console.log("server is listening..."));
