const con = require("./db_connect");

async function createTable() {
  let sql = `CREATE TABLE IF NOT EXISTS users (
    userID INT NOT NULL AUTO_INCREMENT,
    userName VARCHAR(255) NOT NULL UNIQUE,
    userWeight NUMERIC,
    userHeight NUMERIC,
    password VARCHAR(255) NOT NULL,
    CONSTRAINT userPK PRIMARY KEY(userID)
  );`

  await con.query(sql);  
}

createTable();


async function getAllUsers() {
  let sql = `SELECT * FROM users;`
  return await con.query(sql);
}

async function userExists(userName) {
  let sql = `
    SELECT * FROM users
    WHERE userName = "${userName}"
  `
  return await con.query(sql);
}

async function login(user) {
  let cUser = await userExists(user.userName);
  if(!cUser[0]) throw Error("Username does not exist!");
  if(cUser[0].password != user.password) throw Error("Password is incorrect!");

  return cUser[0];
}

async function register(user) {
  
  let cUser = await userExists(user.userName);
  if(cUser.length>0) throw Error("Username already exists");

  
  let sql = `
    INSERT INTO users(userName, password)
    VALUES ("${user.userName}", "${user.password}");
  `
  await con.query(sql)

  
  cUser = await getUser(user)
  console.log(cUser)
  return cUser[0];
}

async function getUser(user) {
  let sql;
  if(user.userID) {
    sql = `
      SELECT * FROM users
      WHERE userID = ${user.userID};
    `
  } else {
    sql = `
      SELECT * FROM users
      WHERE userName = "${user.userName}";
    `
  }

  return await con.query(sql);
}

// edit a username function
async function editUser(user) {
  let cUser = await userExists(user.userName);
  if(cUser.length > 0) throw Error("Username in use!!");

  let sql = `
    UPDATE users 
    SET userName = "${user.userName}"
    WHERE userID = ${user.userID};
  `

  await con.query(sql)
  cUser = await getUser(user)
  return cUser[0]
}

async function deleteUser(user) {
  let sql = `
    DELETE FROM users
    WHERE userID = ${user.userID}
  `
  await con.query(sql);
}

module.exports = { getAllUsers, login, register, editUser, deleteUser }




// const users = [
//     {
//         userId: 12345,
//         userName: "john321",
//         password: "icecream",

//         userId: 56789,
//         userName: "mike123",
//         password: "popcorn",

//         userId: 13579,
//         userName: "charon420",
//         password: "pitviper"


//     }
// ]

// let getUsers = () => users;

// function login(username, password) {
//     const user = users.filter((u) => u.username === username);
//     if(!user[0]) throw Error('User not found');
//     if(user[0].password == password) throw Error('Password is incorrect.');

//     return user[0];
// }