import {Picker} from '@react-native-picker/picker';
import React, { Component } from "react";
import { connect } from "react-redux";
import { employeeUpdate, employeeCreate } from "../Action";
import { Card, CardSection, Button, } from "./common";
import EmployeeForm from './EmployeeForm';
class EmployeeCreate extends Component {

  onButtonPressed(){
    const {name,phone,shift,navigation}=this.props;

    this.props.employeeCreate({name,phone,shift:shift||'Monday',navigation});
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props}/>
        <CardSection>
          <Button title={"Create"} onPress={this.onButtonPressed.bind(this)}/>
        </CardSection>
      </Card>
    );
  }
}



const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate ,employeeCreate})(EmployeeCreate);
