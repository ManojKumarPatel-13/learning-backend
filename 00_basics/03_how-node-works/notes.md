# How Node JS works 

Let us supose a client makes a request to our server

now node js recieves the request and line them up in event queue

now here comes the concept of event loop which is continously watching at event queue whenever a request comes 
it picks it up on fifo principle 

whenever event loop picks a request it categorize it into two parts 
1. blocking operation
2. non blocking operation

if it is a non blocking operation event loop process it and send response back

but whenever it is a blocking operation node js serves it to thread pool where he request a thread(worker) from thread pool
and when there is a thread available thread pool assign it to blocking request which makes it work and when work is completed 
the thread comes back to thread pool and return the response 
(the diffault thread pool size is 4)

**That is why it is not a good practice to write a blocking operation** 

## Now which method is a blocking request and which one is non blocking ?

**Sync methods are blocking** becuase it executes in the order like without executing a line on top a line at bottom can't be executed

whereas **Async methods are non blocking** becuase it not forces to stop the code below it being executed 

