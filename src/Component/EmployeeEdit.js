import _ from "lodash"
import React,{Component} from "react";
import { connect } from "react-redux";
import Communications from 'react-native-communications';
import { employeeUpdate,employeeSave,employeeDelete } from "../Action";
import { Card,CardSection,Button,Confirm } from "./common";
import { Linking } from 'react-native';
import EmployeeForm from "./EmployeeForm";


class EmployeeEdit extends Component{
    state={showModel:false}
    componentDidMount(){
        _.each(this.props.employees,(value,prop)=>{
            this.props.employeeUpdate({prop,value});
        })
    }


    onButtonPressed(){
        const {name,phone,shift,navigation} = this.props;
        
        this.props.employeeSave({name,phone,shift,uid:this.props.employees.uid,navigation})
    }

    onAccept(){
        const {uid,navigation}=this.props.employees;
        
            this.props.employeeDelete({uid,navigation})
    }

    onDecline(){
        this.setState({showModel:false})
    }

    onTextPressed() {
        const { phone, shift } = this.props;
        const body = `Your upcoming shift is on ${shift}`;
      
        Linking.openURL(`sms:${phone}?body=${body}`);
      }

    render(){
        return(
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button title={'Save changes'} onPress={this.onButtonPressed.bind(this)}/>
                </CardSection>
                
                <CardSection>
                    <Button onPress={this.onTextPressed.bind(this)} title={'Text Schedule'}/>
                </CardSection>

                <CardSection>
                    <Button title={'Fire Employee'} onPress={()=>this.setState({showModel: !this.state.showModel})}/>
                </CardSection>

                <Confirm
                visible={this.state.showModel}
                onAccept={this.onAccept.bind(this)}
                onDecline={this.onDecline.bind(this)}
                >
                    Are your sure you want to delete this ?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = state =>{
    const {name,phone,shift} =state.employeeForm;
    const {employees} =state;

    return {name,phone,shift,employees};
}

export default connect(mapStateToProps,{employeeUpdate,employeeSave,employeeDelete})(EmployeeEdit);


