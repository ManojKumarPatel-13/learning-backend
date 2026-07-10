## Stateless Authentication Pattern

so here we used jwt to make a token the token contains all the data of the user and then we assign the token to the cookie
and while generating the token we used a secret key (sign) on it so when the user tries to get something we are checking with
the sign if it is correct we are seeing the token in the cookie of the user and givinng them the data they needed

serverless sites do not support session authentication (statefull authentication) we must use stateless authentication
there are other many token genertors other than jwt

we learnt about two jwt functions sign and verify and there name suggests there working

## some discussion on cookies and stuffs

so as we made token with jwt now we as a server have to send this token to the client safely so to do so we have two methods

1.  cookies
2.  response

cookies are browser feature so can not be accessed on other os and it is automatic kind of thing like we don't need to send it when
we send the token to cookies it automatically send it to the client or you can say the token being sent to the cookie is sent to the
client because ultimately the cookie is of the client  
 important point to note down is cookie is domain specific like cookie created by google can't be access by github you have some
values you can attach with res.cookie for more info read documentation and giving examples of the value i state domain and expiry
date

now discussing about response it is that we in form of header of the response send it back to the client and the client access the
header and store it on local storage of web or native storage of the device also the standard header we use to send the token is
Authhorization with the value of token and a bearer keyword

```javascript
Authorization: Bearer <token>
```

for more info can read documentations
