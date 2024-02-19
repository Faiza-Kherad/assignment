var currUsers = ["Ahsan", "Kashif", "Faisal", "Fahad", "Babar"];
var newUsers = ["Ahsan", "Basit", "Bilal", "Babar", "Haris"];
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    if (currUsers.includes(newUser)) {
        console.log("".concat(newUser, " is not available"));
    }
    else {
        console.log("".concat(newUser, " is available"));
    }
}
