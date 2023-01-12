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
  SEARCH_USER
} from "../constants/index";

import api from '../../api'

export const getUsers = () => {
    return (dispatch) => {
        dispatch({type: GET_USERS_START})
        api.fetchUsers()
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
        api.fetchPosts()
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
        api.fetchPhotos()
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

export const searchUser = (payload) => {
    return {
        type: SEARCH_USER,
        payload
    }
}