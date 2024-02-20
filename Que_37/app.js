var magicianNames = ["Derren Brown", "Dynamo", "Harry Houdini"];
function showMagicians(magicianNames) {
    console.log(magicianNames);
}
function makegreat(magicianNames) {
    for (var _i = 0, magicianNames_1 = magicianNames; _i < magicianNames_1.length; _i++) {
        var magicianName = magicianNames_1[_i];
        console.log("The  Great ".concat(magicianName, " !"));
    }
}
var copyOfArray = magicianNames.slice();
makegreat(copyOfArray);
showMagicians(magicianNames);
showMagicians(copyOfArray);
