import { PrismaClient } from "@prisma/client";

class Client {

    private static _db: PrismaClient | undefined;

    public static get db()
    {
        if(!Client._db)
        {
            Client._db = new PrismaClient();
        }

        return Client._db
    }
}

export default Client;