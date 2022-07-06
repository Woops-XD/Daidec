# Daidec
A Node.js Express framework demo with Actions pipeline. 
use Mysql datatbase is  host on AWS 
the project is host on DigitalOcean 

You can see a  hosted version :  [http://128.199.218.72:3000/](http://128.199.218.72:3000/)  \
you can test the api using postman whcih has been share to Olivier
There are 3 api created    
1. ROOT_URl      
+ welcome page       
2. ROOT_UR/api/exact_name      
+ Return the information of the car based on an exact value match of the “Name”     
3. ROOT_UR/api/name_contain    
+ Return the information of one or multiple cars based on a search value of the “Name”  

<!-- GETTING STARTED -->
## Getting Started

### Requirements

* Node 14.x, 16x
* Git

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. 
the mysql login info is wite in the code. So once run the code the database will be connected 

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```


## Actions 
Once the main branch is changed, the actions will be  called 

action stages:
1. test
 -run 3 unit test in specified Node version
 
2. deploy 
- once test pased ssh to servier and deply the update 


## Summary && Need to improve 
the mysql infro is write in the code should write in .env
