import { DB } from "../db/db.connection";
import { cart } from "../db/schema";
import { CreateRepositoryType } from "../types/repository.type";

const createCart = async (input: any): Promise<{}> => {
  const result = await DB.insert(cart)
    .values({ customerId: 123 })
    .returning({ cartId: cart.id });

  return Promise.resolve({});
};

const findCart = async (id: number): Promise<{}> => {
  return Promise.resolve({});
};

const updateCart = async (id: any): Promise<{}> => {
  return Promise.resolve({});
};

const deleteCart = async (id: number): Promise<{}> => {
  return Promise.resolve({});
};

export const CartRepository: CreateRepositoryType = {
  create: createCart,
  find: findCart,
  edit: updateCart,
  delete: deleteCart,
};
