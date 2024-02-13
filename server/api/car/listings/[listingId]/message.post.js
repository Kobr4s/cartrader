import Joi from "joi"                                               // permet la validation des datas
import { PrismaClient } from "@prisma/client";                      // permet d'interagir avec la DB gérer par prisma

const prisma = new PrismaClient();                                  // invocation d'une nouvelle instance Prisma

const schema = Joi.object({
    email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"]}
    }),
    phone: Joi.string().length(10).pattern(/^0[1-9]\d{8}$/),
    name: Joi.string().required(),
    message: Joi.string().min(20).required()
})
export default defineEventHandler(async (event) => {
    /**
     *  Access Data from Body
     */

    const body = await readBody(event);
    const { listingId } = event.context.params;

    /**
     * Validate Data
     */

    const { error } = await schema.validate(body);

    if (error) {
        throw createError({
            statusCode: 412,
            statusMessage: error.message
        })
    }

    /**
     * SAVE THE DATA
     */

    const { message, email, name, phone } = body;

    return prisma.message.create({
        data: {
            message,
            email,
            name,
            phone,
            listingId: parseInt(listingId)
        }
    })
})