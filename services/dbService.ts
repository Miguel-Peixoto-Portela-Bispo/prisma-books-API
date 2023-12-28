import Client from "../db/client";

async function instantiateDb()
{
    let db;

    try
    {
        db = Client.db;

        await db.category.create({
            data: {
                name: "Fantasy",
                booksNumber: 1,
                books: {
                    create: [{
                        title: "Game of Thrones",
                        authorName: "George R.R. Martin",
                        pagesNumber: 780
                    }]
                }
            }
        });
        await db.category.create({
            data: {
                name: "Adventure",
                booksNumber: 1,
                books: {
                    create: [{
                        title: "White Fang",
                        authorName: "Jack London",
                        pagesNumber: 298
                    }]
                }
            }
        });
    }
    catch(err)
    {
        console.error(err);
    }
    finally
    {
        if(db)
        {
            db.$disconnect();
        }
    }
}

export default instantiateDb;