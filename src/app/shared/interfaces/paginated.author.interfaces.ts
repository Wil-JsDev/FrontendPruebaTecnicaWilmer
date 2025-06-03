import { IAuthor } from "./author.interface";

export interface IPaginatedAuthor {
  items: IAuthor[];
  totalRecords: number;
  pageNumber: number;
  pageSize: number;
}
