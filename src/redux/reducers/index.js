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
    SEARCH_USER,
  } from "../constants/index";

const initialState = {
    users: {
        data: [],
        isFetchting: false,
        isError: false
    },
    posts: {
        data: [],
        isFetchting: false,
        isError: false
    },
    photos: {
        data: [],
        isFetchting: false,
        isError: false
    },
    searchResults: []
}

export default function reducer(state = initialState, action) {
    switch(action.type){
        case GET_USERS_START:
            return {
                ...state,
                users: {
                    ...state.users,
                    isFetchting: true,
                    isError: false
                }
            }

        case GET_POSTS_START:
        return {
            ...state,
            posts: {
                ...state.posts,
                isFetchting: true,
                isError: false
            }
        }

        case GET_PHOTOS_START:
            return {
                ...state,
                photos: {
                    ...state.photos,
                    isFetchting: true,
                    isError: false
                }
            }

        case GET_USERS_SUCCESS:
            return {
                ...state,
                users: {
                    data: action.payload,
                    isFetchting: false,
                    isError: false
                }
            }
        
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: {
                    data: action.payload,
                    isFetchting: false,
                    isError: false
                }
            }

        case GET_PHOTOS_SUCCESS:
            return {
                ...state,
                photos: {
                    data: action.payload,
                    isFetchting: false,
                    isError: false
                }
            }

        case GET_USERS_FAILED:
            return {
                ...state,
                users: {
                    ...state.users,
                    isFetchting: false,
                    isError: true
                }
            }
        case GET_POSTS_FAILED:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    isFetchting: false,
                    isError: true
                }
            }
        case GET_PHOTOS_FAILED:
            return {
                ...state,
                photos: {
                    ...state.photos,
                    isFetchting: false,
                    isError: true
                }
            }
        case SEARCH_USER: 
            return {
                ...state,
                searchResults: state.users.data.filter(user => user.email.includes(action.payload))
                //.map(user => { return {...user, email: user.email.split(action.payload)} })
            }
        default: return state
    }
}