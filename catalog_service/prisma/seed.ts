import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
dotenv.config();

const prisma = new PrismaClient();

async function main() {
  await prisma.$transaction(async (prisma) => {
    await prisma.product.createMany({
      data: [
        {
          name: "Product 1",
          description: "Product 1 description",
          price: 10,
          stock: 10,
        },
      ],
    });
  });
  process.exit(0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
