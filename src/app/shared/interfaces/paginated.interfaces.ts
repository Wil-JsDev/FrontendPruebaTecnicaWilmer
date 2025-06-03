import { IBooks } from "./books.interface";

export interface IPaginatedBooks {
  items: IBooks[];
  totalRecords: number;
  pageNumber: number;
  pageSize: number;
}

export interface IPaginated <T> {
  items: T[];
  totalRecords: number;
  pageNumber: number;
  pageSize: number;
}
