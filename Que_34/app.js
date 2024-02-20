function makeAlbum(artistName, albumTitle, numberOfTracks) {
    if (numberOfTracks === void 0) { numberOfTracks = 2; }
    var Album;
    return Album = {
        fullName: artistName,
        title: albumTitle,
        tracks: numberOfTracks
    };
}
console.log(makeAlbum("Faiza", "Faiza's Album"));
console.log(makeAlbum("Asra", "Asra's Album"));
console.log(makeAlbum("Areesha", "Areesha's Album"));
console.log(makeAlbum("Faiza", "Faiza's Album", 3));
