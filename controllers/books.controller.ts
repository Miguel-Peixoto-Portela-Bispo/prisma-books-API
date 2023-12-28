import * as express from "express"
import booksService from "../services/books.service";
import categoriesService from "../services/categories.service";

const booksController = {

    async getAll(req: express.Request, res: express.Response): Promise<void>
    {
        try
        {
            res.status(200).json(await booksService.findAll())
        }
        catch(err)
        {
            console.error(err);
            res.status(404).json({ error: "Couldn't find what you are looking for." });
        }
    },
    async add(req: express.Request, res: express.Response)
    {
        try
        {
            const category = await categoriesService.findById(req.body.categoryId);

            if(!category) return;

            category.booksNumber++;
            await categoriesService.change(category);

            res.status(201).json(await booksService.save(req.body));
        }
        catch(err)
        {
            console.error(err);
            res.status(400).json({ error: "Couldn't add what you are looking for." });
        }
    },
    async getOne(req: express.Request, res: express.Response): Promise<void>
    {
        try
        {
            res.status(200).json(await booksService.findById(Number(req.params.id)));
        }
        catch(err)
        {
            console.error(err);
            res.status(404).json({ error: "Couldn't find what you are looking for." });
        }
    },
    async update(req: express.Request, res: express.Response):Promise<void>
    {
        try
        {
            const foundBook = await booksService.findById(Number(req.params.id));
            const updateBook = { ...foundBook, ...req.body };

            res.status(200).json(await booksService.change(updateBook));
        }
        catch(err)
        {
            console.error(err);
            res.status(400).json({ error: "Couldn't update what you are looking for." });
        }
    },
    async remove(req: express.Request, res: express.Response)
    {
        try
        {
            res.status(200).json(await booksService.deleteById(Number(req.params.id)));
        }
        catch(err)
        {
            console.error(err);
            res.status(400).json({ error: "Couldn't remove what you are looking for." });
        }
    }

}

export default booksController;