import { bookRepositoryImpl } from '../../infrastructure/dataAccess/bookRepositoryImpl';
import {  groupBooksByCategory } from '../../infrastructure/utils/groupKooksByCategory';

let booksRepository=new bookRepositoryImpl()
export class BooksApiUsecase {
    constructor() {}

    public async grtBooks() {
        try {
            const result = await booksRepository.getAllBooks();
            
            const groupedBooks = await groupBooksByCategory(result);
            return groupedBooks;
        } catch (error) {
            console.error('Error fetching books:', error);
            throw error; 
        }
    }
}