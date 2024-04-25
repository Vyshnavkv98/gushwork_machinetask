import express from "express"
import cors from 'cors'
import bookRouter from "../interfaces/routes/bookRouter"
import { dbConnection } from "../infrastructure/dataAccess/dbConfig/connectDb"

export class AppServer{

    public static async run(port:number):Promise<void>{
        const app=express()
        const  DBConnection=new dbConnection()
        DBConnection.connectDb()
        app.use(express.json())
        app.use(cors())
        app.use('/books',bookRouter)
        app.use('/',bookRouter)

       

        app.listen(port,()=>{
            console.log(`server is running on the port ${port}`);
            
        })
    }
}