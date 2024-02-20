let magicianNames : string[] = ["Derren Brown" , "Dynamo" ,"Harry Houdini"]



function showMagicians(magicianNames: string []){
        console.log(magicianNames);
        
    }
    

function makegreat(magicianNames: string []){
    for (const magicianName of magicianNames) {
        console.log(`The  Great ${magicianName} !`);
        
    }
    
}

let copyOfArray = magicianNames.slice()

makegreat(copyOfArray)
showMagicians(magicianNames)
showMagicians(copyOfArray)