# LetsBloom

Builded a simple RESTful API for managing a library system. This Project deals with the adding the details of the book, getting all the books, and updating the details of a book through its specific id.
I have specified a moongoose schema with the name, author and genre of the book. Also, to create and retrieve data and to access it, I have used Thunder-Client in Vs-code which works same as Postman.

Base url: http://localhost:7000/

1. To add a book and its details
   You need to use api http://localhost:7000/books and create a json object with the deatils of the book.
   sample POST request:

   ![image](https://github.com/rajatHere01/LetsBloom/assets/90706207/2e9aa365-6dc9-46d0-8c72-a1d7dcbaefe6)

   For handling of errors, such as duplicate book entries... it will check the details of the book details of the book to be posted and after finding no such entry then only it add a new book detail. Else, it shows as below:

![image](https://github.com/rajatHere01/LetsBloom/assets/90706207/b8444593-9cec-4daf-b9be-6f7a940eae83)

2. To Update a book detail
   You need to use api http://localhost:7000/books/{id} and update the json object with the new details of the book.
   sample PUT request:

   Before: ![image](https://github.com/rajatHere01/LetsBloom/assets/90706207/4fdda3de-5c6e-471d-b530-8b6c47d99aa8)

   for example changing the genre of the book:
  ![image](https://github.com/rajatHere01/LetsBloom/assets/90706207/6c8dc9d1-b99f-4b93-8e57-82cd9331f345)
   
   After:![image](https://github.com/rajatHere01/LetsBloom/assets/90706207/ca0f61ea-9e8e-40ca-b990-ee5c720a6b4d)



   


   
   
