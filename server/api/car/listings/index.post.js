import Joi from "joi"                                               // permet la validation des datas
import { PrismaClient } from "@prisma/client";                      // permet d'interagir avec la DB gérer par prisma

const prisma = new PrismaClient();                                  // invocation d'une nouvelle instance Prisma

/**
 *  Schema pour les regles de validation des datas
 */

const schema = Joi.object({
    make: Joi.string().required(),
    model: Joi.string().required(),
    year: Joi.number().min(1886).max(new Date().getFullYear() + 1),
    miles: Joi.number().min(0),
    city: Joi.string().min(2).required(),
    numberOfSeats: Joi.number().min(1).max(1000).required(),
    description: Joi.string().min(20).required(),
    features: Joi.array().items(Joi.string()).required(),
    image: Joi.string().required(),
    listerId: Joi.string().required(),
    price: Joi.number().min(0).required(),
    name: Joi.string().required(),
});

export default defineEventHandler(async (event) => {

    /**
     * What we need to do ?
     * 
     * Access Data from Body
     * Validate the Data
     * Save the Data
     * 
     */

    /**
     *  Access Data from Body
     */

    const body = await readBody(event);

    /**
     * Validate Data
     */

    const { error, value } = await schema.validate(body);

    if (error) {
        throw createError({
            statusCode: 412,
            statusMessage: error.message
        })
    }

    /**
     * Save the data
     */

    const {
        image,
        name,
        numberOfSeats,
        features,
        description,
        miles,
        make,
        model,
        city,
        listerId,
        price
    } = body;

    const car = await prisma.car.create({
        data: {
            image,
            name,
            numberOfSeats,
            features,
            description,
            miles,
            make,
            model,
            city,
            listerId,
            price
        }
    });

    return car;
})