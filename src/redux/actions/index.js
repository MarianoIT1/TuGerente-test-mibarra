import {
  GET_USERS_START,
  GET_USERS_SUCCESS,
  GET_USERS_FAILED,
  GET_POSTS_START,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILED,
  GET_PHOTOS_START,
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_FAILED,
} from "../constants/index";

import services from '../../services'

export const getUsers = () => {
    return (dispatch) => {
        dispatch({
            type: GET_USERS_START,
        })
        services.getUsers
            .then(payload => dispatch({
                type: GET_USERS_SUCCESS,
                payload
            }))
            .catch(err => dispatch({
                type: GET_USERS_FAILED,
                payload: err.message
            }))
    }
};

export const getPosts = () => {
    return (dispatch) => {
        dispatch({
            type: GET_POSTS_START,
        })
        services.getPosts
            .then(payload => dispatch({
                type: GET_POSTS_SUCCESS,
                payload
            }))
            .catch(err => dispatch({
                type: GET_POSTS_FAILED,
                payload: err.message
            }))
    }
};

export const getPhotos = () => {
    return (dispatch) => {
        dispatch({
            type: GET_PHOTOS_START,
        })
        services.getPhotos
            .then(payload => dispatch({
                type: GET_PHOTOS_SUCCESS,
                payload
            }))
            .catch(err => dispatch({
                type: GET_PHOTOS_FAILED,
                payload: err.message
            }))
    }
};