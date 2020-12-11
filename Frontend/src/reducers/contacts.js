import { GET_CONTACT_EDIT, GET_CONTACT_LIST, POST_CONTACT_CREATE, PUT_CONTACT_UPDATE, POST_IMAGE_CREATE } from '../actions/contactAction';

let initialState = {
    // contactData: [
    //     {
    //       id: 1,
    //       firstName: "Budi",
    //       lastName: "Doremi",
    //       age: "25",
    //       photo: "./images/avatar.jpg",
    //     },
    //     {
    //       id: 2,
    //       firstName: "Dadang",
    //       lastName: "Konelo",
    //       age: "17",
    //       photo: "./images/avatar.jpg",
    //     },
    //     {
    //       id: 3,
    //       firstName: "Japri",
    //       lastName: "Sasongko",
    //       age: "47",
    //       photo: "./images/avatar.jpg",
    //     },
    //     {
    //       id: 4,
    //       firstName: "Asep",
    //       lastName: "Junaidi",
    //       age: "30",
    //       photo: "./images/avatar.jpg",
    //     },
    //     {
    //       id: 5,
    //       firstName: "Uh",
    //       lastName: "Bambang",
    //       age: "16",
    //       photo: "./images/avatar.jpg",
    //     }
    //   ],
    //   error: false,
    getContactList: false,
    errorContactList: false,
    getContactEdit: false,
    errorContactEdit: false,
    postContactCreate: false,
    errorPostContactCreate: false,
    postImageCreate: false,
    errorPostImageCreate: false
};

/*initialState adalah state yang berisi data yang akan di lempar ke reducer*/
const contacts = (state = initialState, action) => {
    switch (action.type) {
        /*case ini berfungsi untuk memanggil component action yang didalamnya bertugas mmemanggil api*/
        case GET_CONTACT_LIST:
            return {
                ...state,
                getContactList: action.payload.data,
                errorContactList: action.payload.errorMessage
            };

        case GET_CONTACT_EDIT:
            return {
                ...state,
                getContactEdit: action.payload.data,
                errorContactEdit: action.payload.errorMessage
            };

        case POST_CONTACT_CREATE:
            return {
                ...state,
                postContactCreate: action.payload.data,
                errorPostContactCreate: action.payload.errorMessage
            };

        case PUT_CONTACT_UPDATE:
            return {
                ...state,
                postContactCreate: action.payload.data,
                errorPostContactCreate: action.payload.errorMessage
            };
        
        case POST_IMAGE_CREATE:
            return {
                ...state,
                postImageCreate: action.payload.data,
                errorPostImageCreate: action.payload.errorMessage
            }

        default:
            return state;
    }
}

export default contacts;
