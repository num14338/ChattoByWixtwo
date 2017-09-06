import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

class Screen3 extends Component {
  constructor(props) {
   super(props);
   this.state = {
      email : 'Test'
   }
 }
  render() {
    return (
    	<View>
      		<Text>THIS IS SCREEN '3' {this.props.email} !</Text>
          <Text>THIS IS SCREEN '3' {this.props.fname} !</Text>
          <Text>THIS IS SCREEN '3' {this.props.lname} !</Text>
          <Text>THIS IS SCREEN '3' {this.props.mobile} !</Text>
          <Text>THIS IS SCREEN '3' {this.props.address} !</Text>
          <Text>THIS IS SCREEN '3' {this.props.zipcode} !</Text>
          <Text>THIS IS SCREEN '3' {this.props.etc1} !</Text>
          <Text>THIS IS SCREEN '3' {this.props.etc2} !</Text>
          <Text>THIS IS SCREEN '3' {this.props.etc3} !</Text>

      	</View>
    );
  }
}

export default Screen3;
