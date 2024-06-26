import { ICatalogRepository } from "../interface/catalogRepository";

export class CatalogService {
  constructor(private readonly repository: ICatalogRepository) {}

  async createProduct(input: any) {
    try {
      const data = await this.repository.create(input);
      if (!data.id) throw new Error("Error creating product");
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async updateProduct(input: any) {
    const data = await this.repository.update(input);
    return data;
  }

  async getProducts(limit: number, offset: number) {
    const products = await this.repository.find(limit, offset);
    return products;
  }

  async getProduct(id: number) {
    const product = await this.repository.findOne(id);
    return product;
  }

  async deleteProduct(id: number) {
    const response = await this.repository.delete(id);
    return response;
  }
}
