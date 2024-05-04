const fs = require('fs');
const { v4:uuidv4 } = require('uuid')
const fileHelper = require('../helpers/fileHelper');
class BookServices{
    async getBooks(){
        return await fileHelper.readFile("books.json")
    }
    async createBook(bookData){
      const result = await fileHelper.readFile("books.json")
      result.push({...bookData, id: uuidv4()}) 
      return await fileHelper.writeFile("books.json", result)
    }
    async updateBook(newBookData, bookId){
      const result = await fileHelper.readFile("books.json");
      const bookToUpdateIndex = result.findIndex(item => item.id == bookId)
      if(bookToUpdateIndex>=0){
        result.splice(bookToUpdateIndex,1,{...newBookData, id:bookId})
        return await fileHelper.writeFile("books.json", result)
      }
    }
    async deleteBook(bookId){
      const bookArray = await fileHelper.readFile("books.json");
      const bookToDeleteIndex = bookArray.findIndex(item => item.id == bookId)
      console.log(bookToDeleteIndex);
      if(bookToDeleteIndex>=0){
        bookArray.splice(bookToDeleteIndex,1)
        return await fileHelper.writeFile("books.json", bookArray)
      }
    }
    
}

module.exports = new BookServices()