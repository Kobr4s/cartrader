import { PrismaClient } from "@prisma/client";                      // permet d'interagir avec la DB gérer par prisma

const prisma = new PrismaClient();                                  // invocation d'une nouvelle instance Prisma

export default defineEventHandler(async (event) => {
    const { userId } = event.context.params;

    return await prisma.car.findMany({
        where: {
            listerId: userId,
        },
        select: {
            image: true,
            id: true,
            name: true,
            price: true
        }
    });
})