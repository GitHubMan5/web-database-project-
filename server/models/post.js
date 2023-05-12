const con = require("./db_connect");

async function createTable() {
    let sql = `CREATE TABLE IF NOT EXISTS posts (
        postID INT NOT NULL AUTO_INCREMENT,
        userID INT NOT NULL,
        postMessage VARCHAR(255) NOT NULL,
        CONSTRAINT post_pk PRIMARY KEY(postID)
    )`;
    await con.query(sql);
}
createTable();
/*
 post {
    postID: 1234,
    postMessage: "hello!!!",
    userID: 32344
 }
*/ // READ in CRUD
async function getPost(post) {
    let sql = `
      SELECT * FROM posts
      WHERE postID = ${post.postID}
    `
    return await con.query(sql);
}

// CREATE in CRUD
async function createPost(post) {
    let sql = `
      INSERT INTO posts(userID, postMessage)
      VALUES (${post.userID}, "${post.postMessage}");
    `
    return await con.query(sql);
}

// UPDATE in CRUD
async function updatePost(post) {
    let sql = `
    UPDATE users 
    SET userName = "${user.userName}"
    WHERE userID = ${user.userID};
  `
  await con.query(sql);

}

// DELETE in CRUD
async function deletePost(post) {
    let sql = `
    DELETE FROM users
    WHERE userID = ${user.userID}
  `
  await con.query(sql);
}

module.exports = {getPost, createPost, updatePost, deletePost}
// async function create_post();
//     post_content = input("Enter the content of your post: ")
//     hashtags = input("Enter any hashtags you want to include, separated by commas: ")
//     post = api.update_status(post_content + " " + hashtags)
//     print("Post created successfully!")

// async function edit_post();
//     post_id = input("Enter the ID of the post you want to edit: ")
//     post_content = input("Enter the new content of your post: ")
//     api.update_status(post_content, post_id)
//     print("Post edited successfully!")

// async function delete_post();
//     post_id = input("Enter the ID of the post you want to delete: ")
//     api.destroy_status(post_id)
//     print("Post deleted successfully!")

