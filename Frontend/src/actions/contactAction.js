/*aksi yang digunakan untuk proses koneksi API*/
import axios from 'axios';

export const GET_CONTACT_LIST = "GET_CONTACT_LIST";
export const GET_CONTACT_EDIT = "GET_CONTACT_EDIT";
export const POST_CONTACT_CREATE = "POST_CONTACT_CREATE";
export const PUT_CONTACT_UPDATE = "PUT_CONTACT_UPDATE";

export const POST_IMAGE_CREATE = "POST_IMAGE_CREATE"; 

export const getContactList = () => {
    return (dispatch) => {
        axios.get("https://my-json-server.typicode.com/GalihFR/crud-redux/contactData")
            .then(function (response) {
                dispatch({
                    type:  GET_CONTACT_LIST,
                    payload: {
                        data: response.data,
                        errorMessage: false,
                    }
                })
            })
            .catch(function (error) {
                dispatch({
                    type:  GET_CONTACT_LIST,
                    payload: {
                        data: false,
                        errorMessage: error.message,
                    }
                })
            })
    }
};

export const getContactEdit = (id) => {
    return (dispatch) => {
        axios.get("https://my-json-server.typicode.com/GalihFR/crud-redux/contactData/"+id)
        .then(function(response) {
            dispatch({
                type: GET_CONTACT_EDIT,
                payload: {
                    data: response.data,
                    errorMessage: false,
                }
            })
        })
        .catch(function(error) {
            dispatch({
                type: GET_CONTACT_EDIT,
                payload: {
                    data: false,
                    errorMessage: error.message,
                }
            })
        })
    }
};

export const postContactCreate = (data) => {
    return (dispatch) => {        
        axios.post("https://my-json-server.typicode.com/GalihFR/crud-redux/contactData", data)
        .then(function(response) {
            console.log(response)
            dispatch({
                type: POST_CONTACT_CREATE,
                payload: {
                    data: response.data,
                    errorMessage: false,
                }
            })
        })
        .catch(function(error) {
            dispatch({
                type: POST_CONTACT_CREATE,
                payload: {
                    data: false,
                    errorMessage: error.message,
                }
            })
        })
    }
};

export const putContactUpdate = (data, id) => {
    return (dispatch) => {
        axios.put("https://my-json-server.typicode.com/GalihFR/crud-redux/contactData/"+id, data)
        .then(function(response) {
            console.log(response)
            dispatch({
                type: PUT_CONTACT_UPDATE,
                payload: {
                    data: response.data,
                    errorMessage: false,
                }
            })
        })
        .catch(function(error) {
            dispatch({
                type: PUT_CONTACT_UPDATE,
                payload: {
                    data: false,
                    errorMessage: error.message,
                }
            })
        })
    }
};

export const deleteDataContactPermanent = (id) => {
    return (dispatch) => {
        axios.delete("https://my-json-server.typicode.com/GalihFR/crud-redux/contactData/"+id)
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        })
    }
};

export const deleteContactData = () => {
    return (dispatch) => {
        dispatch({
            type: GET_CONTACT_EDIT,
            payload: {
                data: false,
                errorMessage: false,
            }
        })

        dispatch({
            type: POST_CONTACT_CREATE,
            payload: {
                data: false,
                errorMessage: false,
            }
        })
    }
};


export const testUploadImageCreate = (data) => {
    return (dispatch) => {        
        axios.post("https://my-json-server.typicode.com/GalihFR/crud-redux/contactData", data)
        .then(function(response) {
            console.log(response)
            dispatch({
                type: POST_IMAGE_CREATE,
                payload: {
                    data: response.data,
                    errorMessage: false,
                }
            })
        })
        .catch(function(error) {
            dispatch({
                type: POST_IMAGE_CREATE,
                payload: {
                    data: false,
                    errorMessage: error.message,
                }
            })
        })
    }
};