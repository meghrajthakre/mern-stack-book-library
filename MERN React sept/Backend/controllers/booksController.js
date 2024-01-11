
const Book = require('../models/bookmodel');

// add Book

const addBook = async (req, res, next) => {
    let book;

    const { bName, author, description, image, price, available } = req.body ;
    try{
        book = new Book({
            bName,
            author,
            description,
            image,
            price,
            available
        })

        await book.save();

    }catch(e){
        console.log(e);
    }

    if(!book){
        return res.status(500).json({message: "Can't create book"})
    }else{
        return res.status(201).json(book);
    }

}

// get books

const getBook = async (req, res, next) => {

    let book;
    try{
        book = await Book.find();
    }catch(e){
        console.log(e);
    }

    if(!book){
        return res.status(404).json({message: "book not found"})
    }else{
        return res.status(200).json(book);
    }
}

// get book by id 

const getBookById = async (req, res, next) => {

    const _id = req.params.id ;
    let book ;
    try{
        book = await Book.findById(_id);
    }catch(e){
        console.log(e);
    }

    if(!book){
        res.status(404).json({message: "Book not found"})
    }else{
        res.status(200).json(book);
    }

}

// update 

const updateBook = async (req, res, next) => {

    let book;
    const _id = req.params.id ;
    const { bName, author, description, image, price, available } = req.body ;

    try{
        book = await Book.findByIdAndUpdate(_id, {
            bName,
            author,
            description,
            image,
            price,
            available 
        }, {new: true})

        book = await book.save();
    }catch(e){
        console.log(e)
    }

    if(!book){
        res.status(404).json({message: "Cannot update book"});
    }else{
        res.status(201).json(book);
    }

}

// delete book 

const deleteBook = async (req, res, next) => {

    let book;
    const _id = req.params.id ;

    try{
        book = await Book.findByIdAndDelete(_id);
    }catch(e){
        console.log(e)
    }

    if(!book){
        res.status(404).json({message: "Book does not exist"});
    }else{
        res.status(200).json({message: "Deleted successfully..."})
    }

}

exports.addBook = addBook;
exports.getBook = getBook;
exports.getBookById = getBookById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;