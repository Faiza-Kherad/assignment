function  makeAlbum(artistName : string , albumTitle : string, numberOfTracks : number = 2) {
    let Album ;
    return  Album = {
        fullName : artistName,
        title : albumTitle,
        tracks : numberOfTracks
    }
}

console.log(makeAlbum("Faiza" , "Faiza's Album"));
console.log(makeAlbum("Asra" , "Asra's Album"));
console.log(makeAlbum("Areesha" , "Areesha's Album"));

console.log(makeAlbum("Faiza" , "Faiza's Album",3));
