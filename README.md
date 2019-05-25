# challenge
This is a Customer Reward system in JavaScript using Express, Express-fileupload, fs module and readline module

#THE HOW -DOC
Given the Input data was expressed in a text file format, with each line having its function, I decided to treat each 
file as a query. After proper analysis of this file and the solution for working the points, figuring out which data structure to
use was a little difficult, I was stuck between choosing a linked list and graph, a linked list because each customer was chained to another customer
and a graph because i could establish a pattern for both accept and recommend queries. In the end i opted for a graph structure and used a dictionary 
to hold each recommend query in a dict as a={} and accept query as b={}.
I decided to use Javascript to allow ease in building a webservice application that is user friendly and not too complex i.e an 
input form for file upload tha is powered by express framework and bootsrap for styling.

#HOW to run
1. Download the repo
2. run "npm install" to install necessary packages
3. run "npm start" or if you are using nodemon run "nodemon  start"
4. Open Browser in URL type : "localhost:3000"
5. Follow Instruction and upload input data file into form
6. Submit
7. Voila



