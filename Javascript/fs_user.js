const prompt = require('prompt-sync')();
const crypto = require('crypto');
const fs = require('fs');

class User {
  constructor(name, lastName, user, password){
    this.name = name;
    this.lastName = lastName;
    this.user = user;
    this.password = crypto.createHash('sha1').update(password).digest('hex');
  } 
}

class UserManager{
  static id;
  constructor(){
    this.id = 0;
    this.users = [];
  }

  viewUsers(){
    return this.users;
  }

  addUser(user){
    this.users.push([this.id, user]);
    this.id++;
    console.log("User added successfully");
  }
}

const manager = new UserManager();

function main() {
  let aux1, aux2, aux3, aux4; 
  let auxEnter;
  let auxUser;
  let option = 0;
  let bucle = false;
  while (!bucle){
    do{
        console.clear();
        console.log("*********************************************\n");
        console.log("-----------------USER MANAGER----------------\n");
        console.log("*********************************************\n");
        console.log("* Options:                                  *\n");
        console.log("* 1. View user                              *\n");
        console.log("* 2. Add user                               *\n");
        console.log("* 3. Exit program                           *\n");
        console.log("*********************************************\n");
        option = parseInt(prompt("Enter your option: "));
        if (option < 1 || option > 3) {
          setTimeout(() => {console.log("Please enter a valid option!")}, 1500);
          console.clear();
        }
    }while(!(option >= 1 && option <= 3));
    console.clear();
    switch (option) {
      case 1:
        console.clear();
        console.log("*********************************************\n");
        console.log("--------------MENU VIEWING USERS-------------\n");
        console.log("*********************************************\n");
        console.log(manager.viewUsers());
        auxEnter = prompt("Press enter to continue:");
        break;
      case 2:
        console.log("*********************************************\n");
        console.log("--------------MENU ADDING USERS--------------\n");
        console.log("*********************************************\n");
        console.log(" Enter the product data:\n");
        aux1 = prompt("Name: ");
        aux2 = prompt("Last name: ");
        aux3 = prompt("User: ");
        aux4 = prompt("Password: ");
        manager.addUser(new User(aux1, aux2, aux3, aux4));
        auxEnter = prompt("Press enter to continue:");
        break;
      case 3:
        setTimeout(() => {console.log("Closing the program...")}, 1000);
        bucle = true;
        break;
    } 
    console.clear();
  }
}

//Llamada a la funcion principal
main();
