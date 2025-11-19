const adminUser = {
    userName: "admin", 
    email: "shahalamcse7@gmail.com", 
    role: "superAdmin", 
}
Object.freeze(adminUser); 

adminUser.role = "user", 
adminUser.password = "123", 
delete adminUser.email; 
console.log(adminUser); 