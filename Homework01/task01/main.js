'use strict'
/**
 * Демонстрационный файл
 */

const { MusicCollection } = require('./musicCollection.js');

const musicCollection = new MusicCollection();

const mark2 = {
    title: "Mark II",
    artist: "Deep Purple",
    year: "1979"
};

const paranoid = {
    title: "Paranoid",
    artist: "Black Sabbath",
    year: "1970"
};

musicCollection.addAlbum(mark2).addAlbum(paranoid);

for (const album of musicCollection) {
    console.log(`Title: ${album.title}, Artist: ${album.artist}, Year: ${album.year}`);
}