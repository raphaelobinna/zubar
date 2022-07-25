import {
    GET_ALL_SONGS,
    SHOW_SONG,
    DELETE_SONG,
    SEARCH_SONG,
    UPDATE_SONG,
    UPLOAD_SONG,
    LIKE_SONG
} from '../types';

const DEFAULT_STATE = {
    song: [],
    songs: [],
    likedSong: [],
    searchSong: [],
    uploadedSong: [],
    updatedSong: [],
    deletedSong: []
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case GET_ALL_SONGS:
            return {
                songs: action.payload,
            };

        case SHOW_SONG:
            return {
                song: action.payload,
            };

        case SEARCH_SONG:
            return {
                searchSong: action.payload,
            };

        case LIKE_SONG:
            return {
                likedSong: action.payload,
            };

        case DELETE_SONG:
            return {
                deletedSong: action.payload,
            };

        case UPLOAD_SONG:
            return {
                uploadSong: action.payload,
            };

        case UPDATE_SONG:
            return {
                updatedSong: action.payload,
            };
        default:
            return state;
    }
};