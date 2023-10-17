import database from '@react-native-firebase/database';
import {firebase} from '@react-native-firebase/auth';
import { 
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS
 } from "./types"

export const employeeUpdate = ({prop,value})=>{
    return{
        type:EMPLOYEE_UPDATE,
        payload:{prop,value}
    }
}

export const employeeCreate = ({name,phone,shift,navigation})=>{
    const  {currentUser} = firebase.auth();

  return(dispatch)=>{
    if (currentUser) {
        database()
          .ref(`/users/${currentUser.uid}/employees`)
          .push({ name, phone, shift })
          .then(() => {
            dispatch({type:EMPLOYEE_CREATE})
            // Navigate back to the previous screen
            navigation.goBack();
          })
          .catch(error => {
            console.log('Error:', error);
          });

      }
  }
}


export const employeeFetch = () => {
  return (dispatch) => {
    const { currentUser } = firebase.auth();
    database()
      .ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};


export const employeeSave = ({ name, phone, shift, uid ,navigation}) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        dispatch({type:EMPLOYEE_SAVE_SUCCESS})
        // Navigate back to the previous screen
        navigation.goBack();
      })
      .catch(error => console.log('Error saving employee:', error));
  };
};


export const employeeDelete = ({uid,navigation})=>{
  const { currentUser } = firebase.auth();

  return ()=>{
    database()
    .ref(`/users/${currentUser.uid}/employees/${uid}`)
    .remove()
    .then(() => {
      if (navigation && navigation.goBack) {
        navigation.goBack();
      }
    })
    .catch((error) => {
      console.log('Error deleting employee:', error);
    });
  }
}