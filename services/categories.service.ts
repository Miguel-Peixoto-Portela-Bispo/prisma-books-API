import Client from "../db/client";
import category from "../types/category";

const categoriesService = {

    async findAll(): Promise<category[]>
    {
        const db = Client.db;
        const result = await db.category.findMany();

        if(result)
        {
            return result;
        }
        
        throw "Unable to find categories.";
    },
    async change(category: category): Promise<category>
    {
        const db = Client.db;
        const result = await db.category.update({
            where: { id: category.id },
            data: { ...category }
        });

        if(result)
        {
            return result;
        }

        throw `Unable to change the category with id: ${category.id}.`;
    },
    async findById(id: number): Promise<category>
    {
        const db = Client.db;
        const result = await db.category.findFirst({ where: {id} });

        if(result)
        {
            return result;
        }

        throw `Unable to find category with id: ${id}.`;
    },
    async save(category: category): Promise<category>
    {
        const db = Client.db;
        const result = await db.category.create({ data: category });

        if(result)
        {
            return result;
        }

        throw `Unable to save the category.`;
    },
    async deleteById(id: number): Promise<category>
    {
        const db = Client.db;
        const result = await db.category.delete({ where: { id } });

        if(result)
        {
            return result;
        }

        throw `Unable to delete category with id: ${id}.`;
    }
}
export default categoriesService;