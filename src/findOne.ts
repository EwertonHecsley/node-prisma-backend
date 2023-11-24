import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const usuario = await prisma.user.findFirst();
    console.log(usuario);

}

main()