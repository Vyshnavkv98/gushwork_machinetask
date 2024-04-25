import { IBooks } from "../../domain/interface/IBooks";



export async function groupBooksByCategory(books: IBooks[]): Promise<{ [category: string]: IBooks[] }> {
    const groupedBooks: { [category: string]: IBooks[] } = {};

    books.forEach((book: IBooks) => {
        book.genres.forEach((bookCategory:string)=>{
        console.log(bookCategory);
        
        if (!groupedBooks[bookCategory]) {
            groupedBooks[bookCategory] = [];
        }
        groupedBooks[bookCategory].push(book);
       })
    });

    return groupedBooks;
}