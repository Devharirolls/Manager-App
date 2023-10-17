import React,{Component} from "react"
import { connect } from "react-redux";
import { View,Text, StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";
import { emailChanged} from "../Action";
import { passwordChanged,loginUser } from "../Action";
import { Card,CardSection,Input,Button,Spinner } from "./common";

class LoginForm extends Component{
    
    onEmailChange (text){
        this.props.emailChanged(text);
    }

    onPasswordChange (text){
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;
    
        this.props.loginUser({ email, password, navigation: this.props.navigation });
      }

    renderButton(){
        if(this.props.loading){
            return <Spinner size={'large'}/>
        }

        return(
            <Button 
            title={"Log In"} 
            onPress={this.onButtonPress.bind(this)}
            />
        );
    }

    renderError(){
        if(this.props.error){
            return(
                <View style={{backgroundColor:'white'}}>
                    <Text style={styles.errortextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }
    
    render(){
        return (
            <Card>
                <CardSection>
                <Input
                label={"Email"}
                placeholder={"email@email.com"}
                onChangeText={this.onEmailChange.bind(this)}
                value={this.props.email}
                />
                </CardSection>
            <CardSection>
                <Input
                secureTextEntry={true}
                label={"Password"}
                placeholder={"password"}
                onChangeText={this.onPasswordChange.bind(this)}
                value={this.props.password}
                />
            </CardSection>

            {this.renderError()}

            <CardSection>
                {this.renderButton()}
            </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    errortextStyle:{
        fontSize:20,
        alignSelf:'center',
        color:'red'
    }
})


const mapStateToProps =({auth})=>{
    const {email,password,error,loading}=auth;

    return {email,password,error,loading}
}

export default withNavigation(
    connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm)
  );
  