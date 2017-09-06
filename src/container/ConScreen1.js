import { connect } from 'react-redux'
import TextInput from '../component/Screen1'
import  { setEmail,setPass,setLogin }  from '../action'


const mapStateToProps = (state) => {
  return {
  	email: state.Login.email,
    pass:state.Login.pass,
    login:state.Login.login,

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
     	onChange: (text,type) => {
        if(type == 'email') {
	     	dispatch(setEmail(text));
      }
      else if(type == 'pass'){
        dispatch(setPass(text));
      }
    },
      setStatusLogin: (login) =>
      {
        dispatch(setLogin(login));
      },



  }
}
let TextPage = connect(mapStateToProps,mapDispatchToProps)(TextInput)

export default TextPage
