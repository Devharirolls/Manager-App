
import React from "react";
import {Button} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginForm from "./Component/LoginForm";
import EmployeeList from "./Component/EmployeeList";
import EmployeeCreate from "./Component/EmployeeCreate";
import EmployeeEdit from "./Component/EmployeeEdit";

const Stack = createNativeStackNavigator();

const RouterComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
        name="login"
        
        component={LoginForm}
        options={{title:"LoginForm"}}
         />
        <Stack.Screen
          name="employeeList"
          component={EmployeeList}
          options={({ navigation }) => ({
            headerTitle: "EmployeeList",
            headerRight: () => (
              <Button
                title="Add"
                onPress={() => navigation.navigate("employeeCreate")}
              />
            ),
          })}
        />
        <Stack.Screen
        name="employeeCreate"
        component={EmployeeCreate}
        options={{title:"EmployeeCreate"}}
        />
        <Stack.Screen
        name="employeeEdit"
        component={EmployeeEdit}
        options={{title:"EmployeeEdit"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouterComponent;



