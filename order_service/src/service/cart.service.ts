import { CreateRepositoryType } from "../types/repository.type";

export const CreateCart = async (input: any, repo: CreateRepositoryType) => {
  const data = await repo.create(input);
  return data;
};

export const GetCart = async (input: any, repo: CreateRepositoryType) => {
  const data = await repo.find(input);
  return data;
};

export const EditCart = async (input: any, repo: CreateRepositoryType) => {
  const data = await repo.edit(input);
  return data;
};

export const DeleteCart = async (input: any, repo: CreateRepositoryType) => {
  const data = await repo.delete(input);
  return data;
};
