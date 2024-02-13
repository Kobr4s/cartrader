import { PrismaClient } from "@prisma/client";                      // permet d'interagir avec la DB gérer par prisma

const prisma = new PrismaClient();                                  // invocation d'une nouvelle instance Prisma


export default defineEventHandler((event) => {

    const { city } = event.context.params;
    const { make, minPrice, maxPrice } = getQuery(event);

    let filters = {
        city: city.toLowerCase()
    }
    
    if(make) { 
        filters.make = make;
    }

    if (minPrice || maxPrice) {
        filters.price = {};
    }

    if (minPrice) {
        filters.price.gte = parseInt(minPrice);
    }

    if (maxPrice) {
        filters.price.lte = parseInt(maxPrice);
    }

    // ne fonctionne plus
    console.log(filters);
    return prisma.car.findMany({
        where: filters,
    });
})