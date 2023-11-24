import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function findAllUser() {
    const users = await prisma.user.findMany();
    console.log(users);

}

findAllUser();