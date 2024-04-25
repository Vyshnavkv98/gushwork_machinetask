import { Router } from 'express';
import {  bookController} from '../controllers/bookController';
import authenticateToken from '../middleware/auth';

const bookRouter = Router();

let book_controller = new bookController();

bookRouter.get('/',authenticateToken, book_controller.getAllBooks);

export default bookRouter;