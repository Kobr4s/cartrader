import { PrismaClient } from "@prisma/client";                      // permet d'interagir avec la DB gérer par prisma

const prisma = new PrismaClient();                                  // invocation d'une nouvelle instance Prisma


export default defineEventHandler(async (event) => {

    const { listingId } = event.context.params;

    return prisma.message.findMany({
        where: {
            listingId: parseInt(listingId),
        },
    });
})