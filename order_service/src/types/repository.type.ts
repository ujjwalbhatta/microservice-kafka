type Create = (input: any) => Promise<any>;
type Get = (input: any) => Promise<any>;
type Edit = (input: any) => Promise<any>;
type Delete = (input: any) => Promise<any>;

export type CreateRepositoryType = {
  create: Create;
  find: Get;
  edit: Edit;
  delete: Delete;
};
