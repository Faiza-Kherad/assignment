let currUsers = ["Ahsan" , "Kashif" , "Faisal" , "Fahad" , "Babar"]
let newUsers = ["Ahsan" , "Basit" , "Bilal" , "Babar" , "Haris"]


for (const newUser of newUsers) {
    if(currUsers.includes(newUser)){
        console.log(`${newUser} is not available`)
    }
    else{
        console.log(`${newUser} is available`)
    }
}