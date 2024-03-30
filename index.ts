import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    await prisma.user.create({
        data: {
            email: 'hellow@davidson.edu',
            name: 'Alice',
        },
    })
    const allUsers = await prisma.user.findMany({
        include: {
          posts: true,
          replies: true,
        },
    })
    console.dir(allUsers, { depth: null })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })