import { addError, removeError } from './error';
import {
    GET_ALL_SONGS,
    SEARCH_SONG,
    DELETE_SONG,
    SHOW_SONG,
    LIKE_SONG,
    UPLOAD_SONG
} from '../types';
import API from '../api';
import swal from "sweetalert";


export const uploadAction = (payload) => {
    return async dispatch => {
        try {
            const { data } = await API.call('post', `api/song/upload`, payload);
            dispatch({ type: UPLOAD_SONG, payload: data })
            dispatch(removeError());
        } catch (err) {
            const error = err.response;
            swal({
                title: "Failed",
                text: "Unable to upload song, please try again later",
                icon: "warning",
                dangerMode: true,
            })
            dispatch(addError(error));
        }
    }
}

export const getAllSongAction = () => {
    return async dispatch => {
        try {
            const { data } = await API.call('post', `api/songs`);
            dispatch({ type: GET_ALL_SONGS, payload: data })
            dispatch(removeError());
        } catch (err) {
            const error = err.response;
            swal({
                title: "Failed",
                text: "Unable to get song data, please check your connection and try again later",
                icon: "warning",
                dangerMode: true,
            })
            dispatch(addError(error));
        }
    }
}

export const getSongAction = (payload) => {
    return async dispatch => {
        try {
            const { data } = await API.call('post', `api/song/id`, payload);
            dispatch({ type: SHOW_SONG, payload: data })
            dispatch(removeError());
        } catch (err) {
            const error = err.response;
            swal({
                title: "Failed",
                text: "Unable to get song, please check your connection and try again later",
                icon: "warning",
                dangerMode: true,
            })
            dispatch(addError(error));
        }
    }
}

export const searchSongAction = (payload) => {
    return async dispatch => {
        try {
            const { data } = await API.call('post', `api/song/name`, payload);
            dispatch({ type: SEARCH_SONG, payload: data })
            dispatch(removeError());
        } catch (err) {
            const error = err.response;
            swal({
                title: "Failed",
                text: "Song not found, please check your connection and try again later",
                icon: "warning",
                dangerMode: true,
            })
            dispatch(addError(error));
        }
    }
}

export const likeSongAction = () => {
    return async dispatch => {
        try {
            const { data } = await API.call('post', `api/song/like`);
            dispatch({ type: LIKE_SONG, payload: data })
            dispatch(removeError());
        } catch (err) {
            const error = err.response;
            swal({
                title: "Failed",
                text: "Song not found, please check your connection and try again later",
                icon: "warning",
                dangerMode: true,
            })
            dispatch(addError(error));
        }
    }
}

export const deleteSongAction = (payload) => {
    return async dispatch => {
        try {
            const { data } = await API.call('post', `api/song/delete/id`, payload);
            dispatch({ type: DELETE_SONG, payload: data })
            dispatch(removeError());
        } catch (err) {
            const error = err.response;
            swal({
                title: "Failed",
                text: "Unable to delete song, please check your connection and try again later",
                icon: "warning",
                dangerMode: true,
            })
            dispatch(addError(error));
        }
    }
}