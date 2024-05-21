'use strict'

const { MusicCollection } = require('./musicCollection.js');

let musicCollection = null; 

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

describe("constructorsTests", () => {
    test("clear constructor", () => {
        musicCollection = new MusicCollection();
        expect(musicCollection.size).toBe(0);
    });

    test("construct with array", () => {
        musicCollection = new MusicCollection([mark2, paranoid]);
        expect(musicCollection.size).toBe(2);
    });
});

describe("addAlbumsTests", () => {
    beforeEach(() => {
        musicCollection = new MusicCollection();
    });

    test("addOne album", () => {
        musicCollection.addAlbum(paranoid);
        expect(musicCollection.size).toBe(1);
    });

    test("combo additions albums", () => {
        musicCollection.addAlbum(paranoid).addAlbum(mark2);
        expect(musicCollection.size).toBe(2);
    });
});

describe("iterableTests", () => {
    beforeAll(() => {
        musicCollection = new MusicCollection([mark2, paranoid]);
    });

    test("count iteration test", () => {
        let count = 0;
        for (const album of musicCollection) {
            count++;
        }
        expect(count).toBe(2);
    });

    test("contain in iteration test", () => {
        let mark2Check;
        let paranoidCheck;
        for (const album of musicCollection) {
            if (album.title == 'Mark II') mark2Check = true;
            if (album.title == 'Paranoid') paranoidCheck = true;
        }
        expect(mark2Check).toBe(true);
        expect(paranoidCheck).toBe(true);
    });
});

describe("getAlbumTests", () => {
    beforeAll(() => {
        musicCollection = new MusicCollection([mark2, paranoid]);
    });

    test("contain in collection", () => {
        expect(musicCollection.getAlbum(0)).toEqual(mark2);
        expect(musicCollection.getAlbum(1)).toEqual(paranoid);
    });

    test("attributes test", () => {
        const album = musicCollection.getAlbum(0);
        expect(album.title).toStrictEqual("Mark II");
        expect(album.artist).toStrictEqual("Deep Purple");
        expect(album.year).toStrictEqual("1979");
        expect(album.year).not.toStrictEqual(1979);
    });
});