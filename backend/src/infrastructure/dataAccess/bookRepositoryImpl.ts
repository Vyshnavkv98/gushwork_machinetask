import { IBooks } from '../../domain/interface/IBooks';
import Book from '../../domain/models/books';
import {IBookRepository} from '../../domain/repositories/bookRepository'


export class bookRepositoryImpl implements IBookRepository {
    constructor() {
        
    }
    async getAllBooks(): Promise<IBooks[]> {
        try {
            const books = await Book.find();
            
            return books; 
        } catch (error:any) {
            console.log(error.message);
            
            throw new Error('Error fetching books from database'); 
        }
    }
}