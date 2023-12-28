import * as express from "express";
import categoriesService from "../services/categories.service";

const categoriesController = {

    async getAll(req: express.Request, res: express.Response): Promise<void>
    {
        try
        {
            res.status(200).json(await categoriesService.findAll())
        }
        catch(err)
        {
            console.error(err);
            res.status(404).json({ error: "Couldn't find what you are looking for." })
        }
    },
    async add(req: express.Request, res: express.Response): Promise<void>
    {
        try
        {
            res.status(201).json(await categoriesService.save({ ...req.body, booksNumber: req.body.booksNumber?req.body.booksNumber:0 }));
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
            res.status(200).json(await categoriesService.findById(Number(req.params.id)));
        }
        catch(err)
        {
            console.error(err);
            res.status(404).json({ error: "Couldn't find what you are looking for." });
        }
    },
    async update(req: express.Request, res: express.Response): Promise<void>
    {
        try
        {
            const foundCategory = await categoriesService.findById(Number(req.params.id));
            const updateCategory = { ...foundCategory, ...req.body };

            res.status(200).json(await categoriesService.change(updateCategory));
        }
        catch(err)
        {
            console.error(err);
            res.status(400).json({ error: "Couldn't update what you are looking for." });
        }
    },
    async remove(req: express.Request, res: express.Response): Promise<void>
    {
        try
        {
            res.status(200).json(await categoriesService.deleteById(Number(req.params.id)));
        }
        catch(err)
        {
            console.error(err);
            res.status(400).json({ error: "Couldn't remove what you are looking for." });
        }
    }
}

export default categoriesController;