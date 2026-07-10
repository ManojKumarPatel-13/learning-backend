## Stateless Authentication Pattern

so here we used jwt to make a token the token contains all the data of the user and then we assign the token to the cookie 
and while generating the token we used a secret key (sign) on it so when the user tries to get something we are checking with
the sign if it is correct we are seeing the token in the cookie of the user and givinng them the data they needed 

serverless sites do not support session authentication (statefull authentication) we must use stateless authentication
there are other many token genertors other than jwt 

we learnt about two jwt functions sign and verify and there name suggests there working 

