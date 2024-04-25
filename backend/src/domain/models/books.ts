import mongoose from 'mongoose'
import {IBooks} from '../interface/IBooks'

const booksSchema = new mongoose.Schema({

    backdrop: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    cast: {
        type: [String],
        required: true
    },
    classification: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    genres: {
        type: [String],
        required: true
    },
    id: {
        type: String,
        required: true
    },
    imdb_rating: {
        type: Number,
        required: true
    },
    length: {
        type: String,
        required: true
    },
    overview: {
        type: String,
        required: true
    },
    poster: {
        type: String,
        required: true
    },
    released_on: {
        type: Date,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }

});
const Book = mongoose.model<IBooks>('book', booksSchema);

export default Book;
