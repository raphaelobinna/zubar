import { addError, removeError } from './error';
import {
    GET_ALL_COMICS,
    SEARCH_COMIC,
    DELETE_COMIC,
    SHOW_COMIC,
    UPLOAD_COMIC,
    LIKE_COMIC
} from '../types';
import API from '../api';
import swal from "sweetalert";


export const uploadAction = (payload) => {
    return async dispatch => {
        console.log('papappa', payload)
        try {
            const { data } = await API.call('post', `api/comic/upload`, payload);
            console.log(data)
            dispatch({ type: UPLOAD_COMIC, payload: data })
            dispatch(removeError());
            swal({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been published',
                showConfirmButton: false,
                timer: 1500
              })
        } catch (err) {
            const error  = err.response;
            swal({
                title: "Failed",
                text: "Unable to upload comic, please try again later",
                icon: "warning",
                dangerMode: true,
            })
            dispatch(addError(error));
        }
    }
}

export const getAllComicAction = () => {
    return async dispatch => {
        try {
            const { data } = await API.call('post', `api/comics`);
            dispatch({ type: GET_ALL_COMICS, payload: data })
            dispatch(removeError());
        } catch (err) {
            const error = err.response;
            swal({
                title: "Failed",
                text: "Unable to get comic data, please check your connection and try again later",
                icon: "warning",
                dangerMode: true,
            })
            dispatch(addError(error));
        }
    }
}

export const getComicAction = (payload) => {
    return async dispatch => {
        try {
            const { data } = await API.call('post', `api/comic/id`, payload);
            dispatch({ type: SHOW_COMIC, payload: data })
            dispatch(removeError());
        } catch (err) {
            const { error } = err.response;
            swal({
                title: "Failed",
                text: "Unable to get comic, please check your connection and try again later",
                icon: "warning",
                dangerMode: true,
            })
            dispatch(addError(error));
        }
    }
}

export const searchComicAction = (payload) => {
    return async dispatch => {
        try {
            const { data } = await API.call('post', `api/comic/name`, payload);
            dispatch({ type: SEARCH_COMIC, payload: data })
            dispatch(removeError());
        } catch (err) {
            const  error  = err.response;
            swal({
                title: "Failed",
                text: "Comic not found, please check your connection and try again later",
                icon: "warning",
                dangerMode: true,
            })
            dispatch(addError(error));
        }
    }
}

export const likeComicAction = () => {
    return async dispatch => {
        try {
            const { data } = await API.call('post', `api/comic/like`);
            dispatch({ type: LIKE_COMIC, payload: data })
            dispatch(removeError());
        } catch (err) {
            const  error  = err.response;
            swal({
                title: "Failed",
                text: "Comic not found, please check your connection and try again later",
                icon: "warning",
                dangerMode: true,
            })
            dispatch(addError(error));
        }
    }
}

export const deleteComicAction = (payload) => {
    return async dispatch => {
        try {
            const { data } = await API.call('post', `api/comic/delete/id`, payload);
            dispatch({ type: DELETE_COMIC, payload: data })
            dispatch(removeError());
        } catch (err) {
            const error  = err.response;
            swal({
                title: "Failed",
                text: "Unable to delete comic, please check your connection and try again later",
                icon: "warning",
                dangerMode: true,
            })
            dispatch(addError(error));
        }
    }
}