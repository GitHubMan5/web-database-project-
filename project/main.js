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
let li = document.createElement('li');
li.className = "Register";
li.appendChild(document.createTextNode("Registration complete"))
Register.appendChild(li);
let LogIn = document.getElementById("Log In").value;
let li = document.createElement('li');
li.className = "Log In";
li.appendChild(document.createTextNode("Welcome!"))
LogIn.appendChild(li);
let Post! = document.getElementById("Post!").value;
let li = document.createElement('li');
li.className = "Post!";
li.appendChild(document.createTextNode("Post Uploaded!"))
Post.appendChild(li);
let user1 = new User(12345, "John", "Jones", "passwrd");
console.log(user1)