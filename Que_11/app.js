var guest_names = ['Aliza', 'Ayesha', 'Hafsa'];
for (var _i = 0, guest_names_1 = guest_names; _i < guest_names_1.length; _i++) {
    var guest_name = guest_names_1[_i];
    console.log("Hello ".concat(guest_name, ", you are invited to dinner on saturday.\nPlease join us "));
}
// Removing the last guest and adding one new guest
console.log('Unfortunately hafsa cant join us ');
guest_names.pop();
guest_names.push('Sara');
for (var _a = 0, guest_names_2 = guest_names; _a < guest_names_2.length; _a++) {
    var guest_name = guest_names_2[_a];
    console.log("Hello ".concat(guest_name, ", you are invited to dinner on saturday.\nPlease join us "));
}
// inviting more friends
console.log('Good News! We have a bigger dinner table . Inviting more friends to join us');
guest_names.unshift('Faiza');
guest_names.splice(2, 0, 'Mahnoor');
guest_names.push('Maryam');
console.log(guest_names);
for (var _b = 0, guest_names_3 = guest_names; _b < guest_names_3.length; _b++) {
    var guest_name = guest_names_3[_b];
    console.log("Hello ".concat(guest_name, ", you are invited to dinner on saturday.\nPlease join us "));
}
// Shrinking Guest list
console.log("Unfortunately, we can only invite two people for dinner.");
var removedGuests = guest_names.splice(2);
for (var _c = 0, removedGuests_1 = removedGuests; _c < removedGuests_1.length; _c++) {
    var guest_name = removedGuests_1[_c];
    console.log("Sorry ".concat(guest_name, ", I cannot invite you."));
}
console.log(guest_names);
for (var _d = 0, guest_names_4 = guest_names; _d < guest_names_4.length; _d++) {
    var guest_name = guest_names_4[_d];
    console.log("Hello ".concat(guest_name, " you are still invited"));
}
