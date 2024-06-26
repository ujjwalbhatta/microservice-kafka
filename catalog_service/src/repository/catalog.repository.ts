import { PrismaClient } from "@prisma/client";
import { ICatalogRepository } from "../interface/catalogRepository";
import { Product } from "../models/product.model";

export class CatalogRepository implements ICatalogRepository {
  _prisma: PrismaClient;

  constructor() {
    this._prisma = new PrismaClient();
  }

  async create(data: Product): Promise<Product> {
    const datas = await this._prisma.product.create({
      data: {
        description: data.description,
        name: data.name,
        price: data.price,
        stock: data.stock,
      },
    });
    console.log(data);
    return datas;
  }
  async update(data: Product): Promise<Product> {
    return this._prisma.product.update({
      where: { id: data.id },
      data,
    });
  }
  async delete(id: any) {
    return this._prisma.product.delete({
      where: { id },
    });
  }
  async find(limit: number, offset: number): Promise<Product[]> {
    try {
      const products = await this._prisma.product.findMany({
        take: limit,
        skip: offset,
      });
      return products;
    } catch (error) {
      console.log(error);
    }
    return await this._prisma.product.findMany({
      take: limit,
      skip: offset,
    });
  }
  async findOne(id: number): Promise<Product> {
    const product = await this._prisma.product.findFirst({
      where: { id },
    });
    if (product) {
      return Promise.resolve(product);
    }
    throw new Error("product not found");
  }
}
