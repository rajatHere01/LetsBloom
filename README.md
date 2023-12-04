# LetsBloom

Builded a simple RESTful API for managing a library system. This Project deals with the adding the details of the book, getting all the books, and updating the details of a book through its specific id.
I have specified a moongoose schema with the name, author and genre of the book. Also, to create and retrieve data and to access it, I have used Thunder-Client in Vs-code which works same as Postman.

Base url: http://localhost:7000/

1. To POST a book and its details.
   You need to use api http://localhost:7000/books and create a json object with the deatils of the book.
   sample post request:

   ![image](https://github.com/rajatHere01/LetsBloom/assets/90706207/2e9aa365-6dc9-46d0-8c72-a1d7dcbaefe6)

   For handling of errors, such as duplicate book entries... it will check the details of the book details of the book to be posted and after finding no such entry then only it add a new book detail. Else, it shows as below:

   


   
   
