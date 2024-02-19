let usernames = ["admin" , "khan" , "sameer" , "ahmed" , "ali"]

if(usernames.includes("admin")){
    console.log("Hello admin, would you like to see a status report?")
}
else{
    for (const username of usernames) {
        console.log(`Hello ${username}, thank you for logging in again.`)
    }
}