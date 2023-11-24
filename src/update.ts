import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const updateUser = async () => {
    const newUser = await prisma.user.update({
        where: {
            id: 1
        },
        data: {
            name: 'Zé da Manga',
            email: 'zedamanga@email.com'
        }
    })
    console.log(newUser);

};

updateUser();