import { addError, removeError } from './error';
import {
    GET_ALL_VIDEOS,
    SEARCH_VIDEO,
    SHOW_VIDEO,
    LIKE_VIDEO,
    DELETE_VIDEO,
    UPLOAD_VIDEO
} from '../types';
import API from '../api';
import swal from "sweetalert";


export const uploadAction = (payload) => {
    return async dispatch => {
        try {
            const { data } = await API.call('post', `api/video/upload`, payload);
            dispatch({ type: UPLOAD_VIDEO, payload: data })
            dispatch(removeError());
        } catch (err) {
            const error = err.response;
            swal({
                title: "Failed",
                text: "Unable to upload video, please try again later",
                icon: "warning",
                dangerMode: true,
            })
            dispatch(addError(error));
        }
    }
}

export const getAllVideoAction = () => {
    return async dispatch => {
        try {
            const { data } = await API.call('post', `api/videos`);
            dispatch({ type: GET_ALL_VIDEOS, payload: data })
            dispatch(removeError());
        } catch (err) {
            const error = err.response;
            swal({
                title: "Failed",
                text: "Unable to get video data, please check your connection and try again later",
                icon: "warning",
                dangerMode: true,
            })
            dispatch(addError(error));
        }
    }
}

export const getVideoAction = (payload) => {
    return async dispatch => {
        try {
            const { data } = await API.call('post', `api/video/id`, payload);
            dispatch({ type: SHOW_VIDEO, payload: data })
            dispatch(removeError());
        } catch (err) {
            const error = err.response;
            swal({
                title: "Failed",
                text: "Unable to get video, please check your connection and try again later",
                icon: "warning",
                dangerMode: true,
            })
            dispatch(addError(error));
        }
    }
}

export const searchVideoAction = (payload) => {
    return async dispatch => {
        try {
            const { data } = await API.call('post', `api/video/name`, payload);
            dispatch({ type: SEARCH_VIDEO, payload: data })
            dispatch(removeError());
        } catch (err) {
            const error = err.response;
            swal({
                title: "Failed",
                text: "Video not found, please check your connection and try again later",
                icon: "warning",
                dangerMode: true,
            })
            dispatch(addError(error));
        }
    }
}

export const likeVideoAction = () => {
    return async dispatch => {
        try {
            const { data } = await API.call('post', `api/video/like`);
            dispatch({ type: LIKE_VIDEO, payload: data })
            dispatch(removeError());
        } catch (err) {
            const error = err.response;
            swal({
                title: "Failed",
                text: "Video not found, please check your connection and try again later",
                icon: "warning",
                dangerMode: true,
            })
            dispatch(addError(error));
        }
    }
}

export const deleteVideoAction = (payload) => {
    return async dispatch => {
        try {
            const { data } = await API.call('post', `api/video/delete/id`, payload);
            dispatch({ type: DELETE_VIDEO, payload: data })
            dispatch(removeError());
        } catch (err) {
            const error = err.response;
            swal({
                title: "Failed",
                text: "Unable to delete video, please check your connection and try again later",
                icon: "warning",
                dangerMode: true,
            })
            dispatch(addError(error));
        }
    }
}