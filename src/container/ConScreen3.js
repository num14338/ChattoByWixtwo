import { connect } from 'react-redux'
import TextInput from '../component/Screen3'
import  { setEmail,setPass,
          setLogin,setFname,
          setLname,setMobile,
          setAddress,setCity,
          setZipcode,setEtc1,
          setEtc2,setEtc3
        }  from '../action'

const mapStateToProps = (state) => {
  return {
    email: state.Login.email,
    fname:state.Information.fname,
    lname:state.Information.lname,
    mobile:state.Information.mobile,
    address:state.Information.address,
    city:state.Information.city,
    zipcode:state.Information.zipcode,
    etc1:state.Information.etc1,
    etc2:state.Information.etc2,
    etc3:state.Information.etc3,

  }
}

let TextPage = connect(mapStateToProps,null)(TextInput)

export default TextPage
