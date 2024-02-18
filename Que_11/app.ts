const guest_names : string[] = ['Aliza' , 'Ayesha' , 'Hafsa']



for(const guest_name of guest_names){
    console.log(`Hello ${guest_name}, you are invited to dinner on saturday.\nPlease join us `)
}


// Removing the last guest and adding one new guest
console.log('Unfortunately hafsa cant join us ')

guest_names.pop()
guest_names.push('Sara')

for(const guest_name of guest_names){
    console.log(`Hello ${guest_name}, you are invited to dinner on saturday.\nPlease join us `)
}

// inviting more friends
console.log('Good News! We have a bigger dinner table . Inviting more friends to join us')


guest_names.unshift('Faiza')

guest_names.splice(2,0,'Mahnoor')

guest_names.push('Maryam')

console.log(guest_names)


for(const guest_name of guest_names){
    console.log(`Hello ${guest_name}, you are invited to dinner on saturday.\nPlease join us `)
}


// Shrinking Guest list

console.log("Unfortunately, we can only invite two people for dinner.");



const removedGuests: string[] = guest_names.splice(2);

for(const guest_name of removedGuests){
    console.log(`Sorry ${guest_name}, I cannot invite you.`)
}

console.log(guest_names);

for(const guest_name of guest_names){
    console.log(`Hello ${guest_name} you are still invited`)
}

