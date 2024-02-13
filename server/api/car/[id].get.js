import { PrismaClient } from "@prisma/client";                      // permet d'interagir avec la DB gérer par prisma

const prisma = new PrismaClient();                                  // invocation d'une nouvelle instance Prisma

export default defineEventHandler(async (event) => {
    const { id } = event.context.params;

    const car = prisma.car.findUnique({
        where: {
            id: parseInt(id)
        }
    })

    if (!car) {
        throw createError({
            statusCode: 404,
            statusMessage: `Car with ID of ${id} does not exist`,
        })
    }

    return car;
})