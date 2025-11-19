const user = {
    userName: "user1", 
    email: "shahalamcse7@gmail.com", 
    role: "superAdmin", 
    password: "ABC123", 
}
Object.seal(user); 
user.password = "new password", 

console.log(user); 