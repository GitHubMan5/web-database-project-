

function getAllUsers() {
    fetch('http://localhost:3000/users/')
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
}


class User {
    constructor (username, firstname, lastname, password) {
        this.userUsername = username;
        this.userFirstname = firstname;
        this.userLastname = lastname;
        this.userPassword = password;
    }

    getuserUsername() {
        return this.userUsername
    }

    getuserFirstname() {
        return this.userFirstname
    }

    getuserLastname() {
        return this.userLastname
    }

    getuserPassword() {
        return this.userPassword
    }

    setuserUsername(username) {
        this.userUsername = username;
    }

    setuserFirstname(firstname) {
        this.userFirstname = firstname;

    }

    setuserLastname(lastname) {
        this.userLastname = lastname;
    }

    setuserPassword(password) {
        this.userPassword = password;
    }
} 
let Register = document.getElementById("Register").value;
Register.addEventListener('submit', regFunc)

async function regFunc(e) {
  e.preventDefault();

  let fName = document.getElementById('fname').value;
  let lName = document.getElementById('lname').value;
  let password = document.getElementById('password').value;

  let user2 = new User(12345, fName, lName, password);
  console.log(user2)

}


let LogIn = document.getElementById("Log In").value;
LogIn.addEventListener('submit', regFunc)

async function regFunc(e){
    e.preventDefault();

    let uname = document.getElementById('uname').value;
    let password = document.getElementById('password').value;

    let user2 = new User(12345, uname, password);
    console.log(user2)
}


let post = document.getElementById("Post!").value;
post.addEventListener('submit', regFunc)

async function regFunc(e){
    e.preventDefault();

    let post = document.getElementById('post').value;

    let user2 = new User(12345, post);
    console.log(user2)
}

let user1 = new User(12345, "John", "Jones", "passwrd");
console.log(user1)