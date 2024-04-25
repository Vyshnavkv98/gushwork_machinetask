import { Request, Response } from "express";
import { BooksApiUsecase } from "../../application/booksUsecases/booksApiUsecase";

let booksApiUsecase= new BooksApiUsecase()
export class bookController{
       constructor(){
  }
    public async getAllBooks(req:Request,res:Response):Promise<void>{
      try {
        
        const response=await booksApiUsecase.grtBooks()

      if(response){
        res.status(200).send(response)
      }
      } catch (error:any) {
        console.log(error.message);
        
      }
    }
}