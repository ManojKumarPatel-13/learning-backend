## What is a Middleware

it is a function that have access to the request object(req) response object(res) and the next middleware function  

Middleware function can perform the following tasks
* Execute any code
* Make changes to the response and request object 
* End the request-response cycle
* call the next middleware function in the stack 