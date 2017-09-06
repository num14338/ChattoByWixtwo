import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ToastAndroid
} from 'react-native';

class Screen1 extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
      email : '',
      pass: '',
      loggedIn:false,
   }
 }



 componentDidMount() {


    const config = {
      apiKey: 'AIzaSyDbAYM-67E1Ra8PeOO9je_NGAQ4ro9hhxQ',
      authDomain: 'awesomeproject-363fe.firebaseapp.com',
      databaseURL: 'https://awesomeproject-363fe.firebaseio.com',
      projectId: 'awesomeproject-363fe',
      storageBucket: '',
      messagingSenderId: '875495340565'
    };

    if( ! firebase.apps.length)
    {
        firebase.initializeApp(config);
    }
    firebase.auth().signOut();
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
          userData = firebase.auth().currentUser;
          console.log("User ",userData)
          abc = firebase.database().ref('users/'+userData.uid+'/');
          abc.set({
          email: userData.email,
          name : "eieiei"

          });

        this.onLoginSuccess();


        queryAll = firebase.database().ref('users/'+userData.uid+'/');
        queryAll.on('value',function(snapshot) {
          console.log(snapshot.val().email);
        }.bind(this));

      } else {
        this.props.setStatusLogin(false);
      }
    });
}

setName(names){
  userData = firebase.auth().currentUser;
  firebase.database().ref('users/'+userData.uid+'/').set({
  name: names,
  });
}


onButtonPress() {
   const { email, pass } = this.props;

   firebase.auth().signInWithEmailAndPassword(email, pass)
     .then(this.onLoginSuccess.bind(this))
     .catch(() => {
         ToastAndroid.show('ไม่พบบัญชีผู้ใช้!', ToastAndroid.SHORT);
     });
 }

 onButtonCreate() {
   const { email, password } = this.state;

   this.setState({ error: '', loading: true });

   firebase.auth().createUserWithEmailAndPassword(email, password)
     .then(this.onCreateUserSuccess.bind(this))
     .catch(() => {
         ToastAndroid.show('บัญชีถูกใช้ไปแล้ว!', ToastAndroid.SHORT);
     });
 }

  checkInput(){
    if( this.state.id=='' || this.state.pass==''){
      ToastAndroid.show('ยังกรอกไม่ครบ!', ToastAndroid.SHORT);
    }
    else{
      ToastAndroid.show('กรอกหมดแล้ว!', ToastAndroid.SHORT);
    }
  }
  onCreateUserSuccess(){
    ToastAndroid.show('สมัครสมาชิกแล้ว!', ToastAndroid.SHORT);
    //this.setState({loggedIn:true});
    this.props.setStatusLogin(true);
  }


  onLoginSuccess() {
    ToastAndroid.show('เข้าสู่ระบบแล้ว', ToastAndroid.SHORT);
    this.props.navigator.push({
       screen: 'example.Screen3',
       title: 'Home Screen'
     });
  }
  onLogOut(){
    this.setState({loggedIn:false});
    firebase.auth().signOut()
  }

  render() {
    return (
    	<View>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(email) => this.props.onChange(email,'email') }
            value={this.props.email}
            />
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(pass) => this.props.onChange(pass,'pass') }
              secureTextEntry={true}
              value={this.props.pass}
              />
              <Text>THIS IS SCREEN '1' {this.props.email} {this.props.pass} !</Text>

          <Button title='LOGIN'

              onPress={() =>  this.onButtonPress()}>
          GO NEXT PAGE!
          </Button>
          <Button style={{paddingTop:5} }
                        onPress={() =>     this.props.navigator.push({
                               screen: 'example.Screen2',
                               title: 'Home Screen'
                             }) }
                        title="Create Account"
                        color="#841584"
          />
      	</View>
    );
  }
}
Screen1.propTypes = {
  text: PropTypes.string,
  onChange : PropTypes.func
};


export default Screen1;
