# Rest-Api-Node-js-Express
# This API is designed to manage user data. It supports basic CRUD (Create, Read, Update, Delete) operations for user management. The data for testing can be generated using Mockaroo.

Rest Api - Json

GET / api/user - HTML Document Render
GET /api/user - list all users - Done

GET /api/ user/1  get the User With ID 1
GET /api/user/2  get the User With ID 2

Dynamic Path Parameter
GET /api/user/:id
:id -> Variable Dynamic 

POST /api/user - create new User

PATCH /api/User/1 - Edit The User With ID 1

DELETE /api/User/1 - Delete the User With ID 1


https://mockaroo.com/

Download Postman For shoe preview and execution time 

https://www.postman.com/downloads/

// run this 

localhost:3000
localhost:3000/users
localhost:3000/api/users
localhost:3000/api/users/1
localhost:3000/api/users/100
localhost:3000/api/users/500
localhost:3000/api/users/1000


use middleware plugin to store data in postman to json
/ middleware - plugin
app.use(express.urlencoded({extended: false}));
// Routes



http://localhost:3000/api/users/

after the data send
output 

server started at PORT:3000
Body [Object: null prototype] {
  first_name: 'raj',
  last_name: 'Kumar',
  email: 'sudhir@sraryan.co.in',
  gender: 'male',
  job_title: 'software eng'
}

# Middleware 
Middleware is software that connects different parts of an application or system, enabling seamless interaction between them. It is widely used in web development, distributed systems, and enterprise applications to process requests, enforce security, and streamline communication between components.

# Functions of Middleware:
Request and Response Management
Processes and transforms HTTP requests/responses between the client and server.

Security Enforcement
Handles authentication, authorization, encryption, and other security protocols.

Data Transformation
Converts data formats (e.g., JSON to XML) for compatibility between systems.

Performance Optimization
Implements caching, compression, and load balancing.

Error and Exception Handling
Manages errors centrally to ensure robust and user-friendly applications.
