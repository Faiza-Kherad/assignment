var usernames = ["admin", "khan", "sameer", "ahmed", "ali"];
if (usernames.includes("admin")) {
    console.log("Hello admin, would you like to see a status report?");
}
else {
    for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
        var username = usernames_1[_i];
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
}
