'use strict'

class MusicCollection {
    // constructor() {
    //     this.album = [];
    //     this.size = this.album.length;
    // }

    constructor(albums = []) {
        this.album = albums;
        this.size = albums.length;
    }

    addAlbum(album) {
        this.album.push(album);
        this.size++;
        return this;
    }

    getAlbum(id) {
        return this.album[id];
    }

    [Symbol.iterator] = () => {
        return {
            array: this.album,
            current: 0,
            to: this.size,
            next() {
                if (this.current < this.to) {
                    return { done: false, value: this.array[this.current++] };
                } else return { done: true };
            }
        }
    };
}

module.exports = { MusicCollection };