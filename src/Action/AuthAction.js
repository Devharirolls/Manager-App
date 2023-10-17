import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from "./types";
import {firebase} from '@react-native-firebase/auth';

export const emailChanged = (text) =>{
    return {
        type:EMAIL_CHANGED,
        payload:text
    }
}

export const passwordChanged = (text) =>{
    return {
        type:PASSWORD_CHANGED,
        payload:text
    }
}

// export const loginUser = ({email,password})=>{
//    return (dispatch)=>{
//         dispatch ({type:LOGIN_USER});
    
//     firebase.auth().signInWithEmailAndPassword(email,password)
//     .then(user=>loginUserSuccess(dispatch,user))
//     .catch((error)=>{
//         console.log(error);

//         firebase.auth().createUserWithEmailAndPassword(email,password)
//         .then(user=>loginUserSuccess(dispatch,user))
//         .catch(()=>loginUserFail(dispatch))
//     })
//    }
// }


export const loginUser = ({ email, password, navigation }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => loginUserSuccess(dispatch, user, navigation))
      .catch((error) => {
        console.log(error);

        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then((user) => loginUserSuccess(dispatch, user, navigation))
          .catch(() => loginUserFail(dispatch));
      });
  };
};

  const loginUserSuccess = (dispatch, user,navigation) => {
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: user,
    });

    navigation.reset({
      index: 0,
      routes: [{ name: 'employeeList' }]
    });
  };

  

const loginUserFail = (dispatch)=>{
    dispatch({
        type:LOGIN_USER_FAIL
    })
}