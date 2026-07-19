## HTTP Headers and Status

**Headers**  
Http headers are important part of the api request and response as the represent the meta-data associated with the api request and
response.  
Headers carry information for the request and the response body
Headers passes extra info about req and res

to write headers we can use setHeader() method and also it is a good and standard practice to name the custom header starting with X-

```javascript
app.get("/user", (req, res) => {
  res.setHeader("X-MyName", "Manoj Kumar Patel");

  return res.json(users);
});
```

**Status Code**  
Http response status codes indicate weather a specific http request has been successfully completed. Response are grouped in five classes  
* Informational response (100-199)
* Successful response (200-299) :- usually wanted one
* Redirection message (300-399)
* Client error response (400-499)
* Server error response (500-599)


## Sucessful response

**200 OK** :- The request succeeded.  
**201 Created** :- The request succeeded and a new resource was created as a result.  
**202 Accepted** :- The request have been recieved but yet not acted upon.  

```javascript
    res.status(201)
```

the above given code is used to give custom status code (by custom status code here i mean like for all kind of success we don't want to give 200 so we can use this and give other status code as well like given above 201 for creation)

you can read more about the status code from documentations