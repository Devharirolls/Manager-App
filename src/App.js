import React,{Component} from "react";
import { Provider } from "react-redux";
import { createStore,applyMiddleware } from "redux";
import reducers from "./Reducer";
import ReduxThunk from 'redux-thunk';
import {firebase} from "@react-native-firebase/app";
import RouterComponent from "./Router";

class App extends Component{

    componentDidMount(){
        const firebaseConfig = {
            apiKey: "AIzaSyBcd25IKzEXKBYdZcRut7M-EGmeXDR-tT4",
            authDomain: "manager-b71c7.firebaseapp.com",
            projectId: "manager-b71c7",
            storageBucket: "manager-b71c7.appspot.com",
            messagingSenderId: "794521585494",
            appId: "1:794521585494:web:1b7dee4f45e96c6fdaf8f7",
            databaseURL:"https://manager-b71c7-default-rtdb.firebaseio.com/"
          };
          
          // Initialize Firebase
          if(!firebase.apps.length){
            firebase.initializeApp(firebaseConfig);
          }
    
    }

    render(){

        const store = createStore(reducers,{},applyMiddleware(ReduxThunk));
        return(
            <Provider store={store}>
            <RouterComponent />
            </Provider>
            
        );
    }
}

export default App;

