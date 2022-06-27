import {  createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from '../../firebase/firebaseConfig'

const registerStart = () =>({
    type: "REGISTER_START",
});

export const signUp =  (authParams) => {
    return function (dispatch){
    dispatch(registerStart());
    const { fullname, email, password,roll } = authParams
    const { user: { uid } } = createUserWithEmailAndPassword(auth, email, password)
    // writeUserData(uid , fullname, email, roll)
  };
        // auth.createUserWithEmailAndPassword(email,password).then(({user})=> {
        //     user.updateProfile({
        //         displayName
        //     })
        //     dispatch(registerSuccess(user))
        // })
        // .catch((error) => dispatch(registerFail(error.message)))
    };
;

// export const decNumber = () => {
//     return {
//         type: 'DECREMENT'
//     }
// };