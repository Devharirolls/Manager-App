import _ from 'lodash';
import React, { Component } from "react";
import { connect } from "react-redux";
import { employeeFetch } from "../Action";
import { StyleSheet, View ,Text,FlatList,TouchableOpacity } from "react-native";
import { CardSection } from './common';


class EmployeeList extends Component{
    componentDidMount(){
        this.props.employeeFetch();
        // this.createDataSource(this.props);
       
    }

    onRowPress(item) {
      this.props.navigation.navigate("employeeEdit");
    }

    render() {
      console.log(this.props);
      return (
        <View>
          <FlatList
            data={this.props.employees}
            renderItem={({ item }) => (
             <TouchableOpacity onPress={() => this.onRowPress(item)}>
               <CardSection>
                <Text style={styles.textStyle}>{item.name}</Text>
              </CardSection>
             </TouchableOpacity>
               // Replace with appropriate employee data
            )}
            keyExtractor={(item) => item.uid}
          />
        </View>
      );
    }    
}

const styles = StyleSheet.create({
  textStyle:{
    fontSize: 18,
    paddingLeft: 15,
    color:'black'
  }
});

const mapStateToProps = state=>{
  const employees = _.map(state.employees, (val,uid)=>{
    return {...val,uid};
  });

    return {employees};
}


export default connect(mapStateToProps,{employeeFetch})(EmployeeList);

