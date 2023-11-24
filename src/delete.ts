import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function deleteUser() {
    const user = await prisma.user.delete({
        where: {
            id: 1
        }
    })

    console.log(`Deletou ${user.name}`);

}

deleteUser()