import { PrismaClient } from '@prisma/client'

// const prisma = async() => {
//     const prisma = new PrismaClient()
//     try {
//         await prisma.$connect();
//         console.log('Successfully connected to the database');
//         return prisma;
//     } catch (error) {
//         console.error('Failed to connect to the database');
//         console.error(error);
//         process.exit(1);
//     }
// }

const prisma = new PrismaClient()


export default prisma;