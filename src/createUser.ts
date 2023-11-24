import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.user.create({
        data: {
            email: 'ewerton@email.com',
            name: 'Ewerton Hecsley'
        }
    })
    console.log(result);
};

main();

export default prisma;
