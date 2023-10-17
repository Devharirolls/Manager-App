import React,{Component} from "react";
import {Picker} from '@react-native-picker/picker';
import { StyleSheet, Text,View } from 'react-native';
import { connect } from "react-redux";
import { employeeUpdate,  } from "../Action";
import { Card, CardSection,  Input } from "./common";
class EmployeeForm extends Component{
    render(){
        return(
            <View>
            <CardSection>
                <Input
                    label={"Name"}
                    placeholder={"Hari"}
                    value={this.props.name}
                    onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })} />
            </CardSection><CardSection>
                    <Input
                        label={"Phone Number"}
                        placeholder={"1234567890"}
                        value={this.props.phone}
                        onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })} />
                </CardSection><CardSection>
                    <Text style={styles.pickerTextStyle}>shift</Text>
                </CardSection><Picker
                    selectedValue={this.props.shift}
                    onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
                >
                    <Picker.Item label="Monday" value="Monday" />
                    <Picker.Item label="Tuesday" value="Tuesday" />
                    <Picker.Item label="Wednesday" value="Wednesday" />
                    <Picker.Item label="Thusday" value="Thusday" />
                    <Picker.Item label="Friday" value="Friday" />
                    <Picker.Item label="Saturday" value="Saturday" />
                    <Picker.Item label="Sunday" value="Sunday" />
                </Picker>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    pickerTextStyle:{
        fontSize:18,
        paddingLeft:25,
        
        color:'black',
        fontWeight:'bold'
    },
    CardStyle:{
        flexDirection:'column'
    }
})

const mapStateToProps = state =>{
    const {name,phone,shift} =state.employeeForm;

    return {name,phone,shift};
}

export default connect(mapStateToProps,{employeeUpdate})(EmployeeForm);
