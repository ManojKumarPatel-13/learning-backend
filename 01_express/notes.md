# What is Express JS

it is a fast, unopinionated, minimalistic web frame work for node.js

actually writing regular node is hell confusing like writing multiple lines of switch cases and conditionals make the 
code not readable so we use expresss here to solve this problem which help us strucutre our code and do a lot of task on itself

to install express write command 

```command
npm i express
```

Versioning  
it is a crucial topic to discuss on let suppose we take example of latest express version = ^5.2.1

here we divide the version in 4 part  
1st part is the symbol (carrot, ^)  
2nd part is the digit 5  
3rd part is the digit 2  
and 4th part is the digit 1  

here so let us understand the role of each digit  
4th part is for minor bug fixes like fixing sum typos or some minor fixes  
3rd part is for major bug fixes recommended update ones like adding some sort of new feature or fixing some major but  
2nd part is like changing the version which is the breaking one which can break your code if updated not recommend to update on a 
existing application or code can do on a new one   
1st part the symbol is restriction we can make on npm carrot stands for you can update the 4th and 3rd part but npm can never
update the 2nd part similarly we have a ~ symbol which represents you can just update the 4th part 3rd part and 2nd part will be update by the developer
only