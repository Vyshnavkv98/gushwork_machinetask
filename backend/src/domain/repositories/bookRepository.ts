import { IBooks } from "../interface/IBooks";

export interface IBookRepository{
    getAllBooks():Promise<IBooks[]>
}