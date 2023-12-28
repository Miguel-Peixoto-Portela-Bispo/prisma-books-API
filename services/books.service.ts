import Client from "../db/client";
import book from "../types/book";

const booksService = {

    async findAll(): Promise<book[]>
    {
        const db = Client.db;
        const result = await db.book.findMany();
        
        if(result)
        {
            return result;
        }
        
        throw "Unable to find books.";
    },
    async save(book: book): Promise<book>
    {
        const db = Client.db;
        const result = await db.book.create({ data: book });

        if(result)
        {
            return result;
        }

        throw "Unable to save the book.";
    },
    async findById(id: number): Promise<book>
    {
        const db = Client.db;
        const result = await db.book.findFirst({ where: { id } });

        if(result)
        {
            return result;
        }

        throw `Unable to find book with id: ${id}.`;
    },
    async change(book: book): Promise<book>
    {
        const db = Client.db;
        const result = await db.book.update({
            where: { id: book.id },
            data: { ...book }
        });

        if(result)
        {
            return result;
        }

        throw `Unable to change book with id: ${book.id}.`;
    },
    async deleteById(id: number)
    {
        const db = Client.db;
        const result = await db.book.delete({ where: { id } });

        if(result)
        {
            return result;
        }

        throw `Unable to delete book with id: ${id}.`;
    }
}

export default booksService;