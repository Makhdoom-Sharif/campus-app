import * as type from "./actionType";
import {auth} from "../firebase/firebaseConfig";
import {createUserWithEmailAndPassword} from "firebase/auth";

const registerStart = () =>({
    type: type.REGISTER_START,
});
const registerSuccess = (user) =>({
    type: type.REGISTER_SUCCESS,
    payload: user,
});
const registerFail = (error) =>({
    type: type.REGISTER_FAIL,
    payload: error,
});


const loginStart = () =>({
    type: type.LOGIN_START,
});
const loginSuccess = (user) =>({
    type: type.LOGIN_SUCCESS,
    payload: user,
});
const loginFail = (error) =>({
    type: type.LOGIN_FAIL,
    payload: error,
});


const logoutStart = () =>({
    type: type.LOGOUT_START,
});
const logoutSuccess = () =>({
    type: type.LOGOUT_SUCCESS,
});
const logoutFail = (error) =>({
    type: type.LOGOUT_FAIL,
    payload: error,
});

export const setUser = (user) => ({
    type: type.SET_USER,
    payload: user,
})

export const clearError = () =>({
    type: type.CLEAR_ERROR,
});



export const registerInitiate =  (authParams) => {
    return function (dispatch){
        dispatch(registerStart());
        const { fullname, email, password,roll } = authParams
        try{
        createUserWithEmailAndPassword(auth,email,password)}
        catch(error){
            console.log(error)
        }
        // .then(({user})=> {
        //     user.updateProfile({
        //         displayName
        //     })
        //     dispatch(registerSuccess(user))
        // })
        // .catch((error) => dispatch(registerFail(error.message)))
    };
};

export const loginInitiate = (email,password,) => {
    return function (dispatch){
        dispatch(loginStart());
        auth
        .signInWithEmailAndPassword(email,password)
        .then(({user})=> {
            
            dispatch(loginSuccess(user))
        })
        .catch((error) => dispatch(loginFail(error.message)))
    };
};

export const logoutInitiate = () => {
    return function (dispatch) {
        dispatch(logoutStart() );
        auth
        .signOut()
        .then((resp) =>   dispatch(logoutSuccess() ))
        .catch((error) => dispatch(logoutFail(error.message)))
    };
};
