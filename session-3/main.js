const album = {
    title: '21',
    artist: 'Adele',
    year: 2011,
    songs: [
        {
            name: 'Rolling in the Deep',
        },
        {
            name: 'Rumour has it',
        },
        {
            namme: 'Turning Tables',
        }
    ],
    info() {
       return `${this.title} was created by ${this.artist}`; 
    }
};

// accessing properties using dot notation
console.log(album.info());

delete album.info;

// object to JSON
let albumAsString = JSON.stringify(album);
console.log(albumAsString);

// JSON to object

let albumAsObject = JSON.parse(albumAsString);
console.log(albumAsObject);