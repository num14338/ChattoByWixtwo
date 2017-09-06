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

class Screen2 extends Component {
  constructor(props) {
   super(props);
   this.state = {
     email : '',
     pass: '',
     loggedIn:false,
     fname:'',
     lname:'',
     mobile:'',
     address:'',
     city:'',
     zipcode:'',
     etc1:'',
     etc2:'',
     etc3:'',
   }
 }
 componentDidMount() {
   firebase.auth().signOut();
 }
 onButtonCreate() {

   const { email, pass } = this.props;

   this.setState({ error: '', loading: true });

   firebase.auth().createUserWithEmailAndPassword(email, pass)
     .then(this.onCreateUserSuccess.bind(this))
     .catch(() => {
         ToastAndroid.show('บัญชีถูกใช้ไปแล้ว!', ToastAndroid.SHORT);
     });
 }
 onCreateUserSuccess(){
   ToastAndroid.show('สมัครสมาชิกแล้ว!', ToastAndroid.SHORT);
   //this.setState({loggedIn:true});
   this.props.setStatusLogin(true);


   firebase.auth().onAuthStateChanged((user) => {
     if (user) {
         userData = firebase.auth().currentUser;
         console.log("User ",userData)
         abc = firebase.database().ref('users/'+userData.uid+'/');
         abc.set({
         email: userData.email,
         fname : this.props.fname,
         lname: this.props.lname,
         mobile: this.props.mobile,
         address: this.props.address,
         city: this.props.city,
         zipcode: this.props.zipcode,
         etc1: this.props.etc1,
         etc2: this.props.etc2,
         etc3: this.props.etc3,

         });

       this.onLoginSuccess();
       this.props.navigator.push({
              screen: 'example.Screen3',
              title: 'Home Screen'
            })

     } else {
       this.props.setStatusLogin(false);
     }
   });


 }



  render() {
    return (
    	<View>

      		<Text>THIS IS SCREEN create '2' !</Text>


          <View style={{flexDirection: 'row'}}>
          <Text>EMAIL</Text>
          <TextInput
            style={{height: 40, width: 150,borderColor: 'gray', borderWidth: 1}}
            onChangeText={(email) => this.props.onChange(email,'email') }
            value={this.props.email}
          />
          </View>

          <View style={{flexDirection: 'row'}}>
          <Text>PASSWORD</Text>
          <TextInput
            style={{height: 40, width: 150,borderColor: 'gray', borderWidth: 1}}
            onChangeText={(pass) => this.props.onChange(pass,'pass')}
            secureTextEntry={true}
            value={this.props.pass}
          />
          </View>



          <View style={{flexDirection: 'row'}}>
          <Text>FIRST NAME</Text>
          <TextInput
            style={{height: 40, width: 150,borderColor: 'gray', borderWidth: 1}}
            onChangeText={(fname) => this.props.setInformation(fname,'fname')}
            value={this.props.fname}
          />
          </View>


          <View style={{flexDirection: 'row'}}>
          <Text>LAST NAME</Text>
          <TextInput
            style={{height: 40, width: 150,borderColor: 'gray', borderWidth: 1}}
            onChangeText={(lname) => this.props.setInformation(lname,'lname')}
            value={this.props.lname}
          />
          </View>


          <View style={{flexDirection: 'row'}}>
          <Text>MOBILE PHONE</Text>
          <TextInput
            style={{height: 40, width: 150,borderColor: 'gray', borderWidth: 1}}
            onChangeText={(mobile) => this.props.setInformation(mobile,'mobile')}
            value={this.props.mobile}
          />
          </View>

          <View style={{flexDirection: 'row'}}>
          <Text>ADDRESS</Text>
          <TextInput
            style={{height: 40, width: 150,borderColor: 'gray', borderWidth: 1}}
            onChangeText={(address) => this.props.setInformation(address,'address')}
            value={this.props.address}
          />
          </View>


          <View style={{flexDirection: 'row'}}>
          <Text>CITY</Text>
          <TextInput
            style={{height: 40, width: 150,borderColor: 'gray', borderWidth: 1}}
            onChangeText={(city) => this.props.setInformation(city,'city')}
            value={this.props.city}
          />
          </View>

          <View style={{flexDirection: 'row'}}>
          <Text>ZIPCODE</Text>
          <TextInput
            style={{height: 40, width: 150,borderColor: 'gray', borderWidth: 1}}
            onChangeText={(zipcode) => this.props.setInformation(zipcode,'zipcode')}
            value={this.props.zipcode}
          />
          </View>

          <View style={{flexDirection: 'row'}}>
          <Text>ETC1</Text>
          <TextInput
            style={{height: 40, width: 150,borderColor: 'gray', borderWidth: 1}}
            onChangeText={(etc1) => this.props.setInformation(etc1,'etc1')}
            value={this.props.etc1}
          />
          </View>

          <View style={{flexDirection: 'row'}}>
          <Text>ETC2</Text>
          <TextInput
            style={{height: 40, width: 150,borderColor: 'gray', borderWidth: 1}}
            onChangeText={(etc2) => this.props.setInformation(etc2,'etc2')}
            value={this.props.etc2}
          />
          </View>

          <View style={{flexDirection: 'row'}}>
          <Text>ETC3</Text>
          <TextInput
            style={{height: 40, width: 150,borderColor: 'gray', borderWidth: 1}}
            onChangeText={(etc3) => this.props.setInformation(etc3,'etc3')}
            value={this.props.etc3}
          />
          </View>

          <Button style={{paddingTop:5} }
                      onPress={() =>  this.onButtonCreate()}
                        title="SAVE"
                        color="#841584"
          />


      	</View>
    );
  }
}

export default Screen2;
