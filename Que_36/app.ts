let magicianNames : string[] = ["Derren Brown" , "Dynamo" ,"Harry Houdini"]

function show_magicians(magicianNames: string []){
    for (const magicianName of magicianNames) {
        console.log(`The  Great ${magicianName} !`);
        
    }
    
}

show_magicians(magicianNames)