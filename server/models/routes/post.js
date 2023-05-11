const con = require("./db_connect");

async function createTable() {
    let sql = `CREATE TABLE IF NOT EXISTS users (
        user_id INT NOT NULL AUTO_INCREMENT,
        username VARCHAR(255) NOT NULL UNIQUE,
        user_password VARCHAR (255),
        CONSTRAINT user_pk PRIMARY KEY(user_id)
    )`;
    await con.query(sql);
}
createTable();


async function create_post();
    post_content = input("Enter the content of your post: ")
    hashtags = input("Enter any hashtags you want to include, separated by commas: ")
    post = api.update_status(post_content + " " + hashtags)
    print("Post created successfully!")

async function edit_post();
    post_id = input("Enter the ID of the post you want to edit: ")
    post_content = input("Enter the new content of your post: ")
    api.update_status(post_content, post_id)
    print("Post edited successfully!")

async function delete_post();
    post_id = input("Enter the ID of the post you want to delete: ")
    api.destroy_status(post_id)
    print("Post deleted successfully!")