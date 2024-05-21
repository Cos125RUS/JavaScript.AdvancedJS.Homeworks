'use strict'

/**
 * Хранилище музыкальных альбомов
 */
class MusicCollection {

    constructor(albums = []) {
        this.album = albums;
        this.size = albums.length;
    }

    /**
     * Добавить альбом в коллекцию
     * @param {*} album музыкальный альбом
     * @returns обновлённая коллекция
     */
    addAlbum(album) {
        this.album.push(album);
        this.size++;
        return this;
    }

    /**
     * Получить альбом по id
     * @param {*} id идентификатор альбома
     * @returns музыкальный альбом
     */
    getAlbum(id) {
        return this.album[id];
    }

    /**
     * Итератор коллекции по альбомам
     * @returns функция-итератор
     */
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