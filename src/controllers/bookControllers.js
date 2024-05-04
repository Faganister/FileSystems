const bookServices = require("../services/bookServices")
class BookControllers{
    async getBooks(req,res){
        const books = await bookServices.getBooks()
        res.send(books)
    }
    async getBook(req,res){
        const books = await bookServices.getBooks()
        res.send(books.find(item => item.id == req.params.id))

    }
    async createBook(req,res){   
        const result = await bookServices.createBook(req.body)
        res.send(`Book ${JSON.stringify(req.body)} has been created`)
    }
    async updateBook(req,res){
        const result = await bookServices.updateBook(req.body, req.params.id)
        res.send(`Book ${JSON.stringify(req.body)} has been updated`)

    }
    async deleteBook(req,res){
        await bookServices.deleteBook(req.params.id)
        res.send("Book deleted successfully")
    }
}

module.exports = new BookControllers()