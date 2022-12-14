import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
   wrapper: {
      flex: 1,
      backgroundColor: '#fff',
   },
   container: {
      flex: 1,
      // backgroundColor: '#fff',
      flexDirection:'column',
      marginTop: '20%',
      paddingVertical: 20,
      paddingHorizontal: 60,
   },
   backIcon: {
      marginBottom:67,
   },
   title: {
      fontSize: 28,
      fontWeight: '800',
      // lineHeight: '34px',
      // letterSpacing: '-0.01px',
      color:'#303030',
   },
   subtitle: {
      fontSize: 16,
      fontWeight: '400',
      // lineHeight: '24px',
      // letterSpacing: '-0.01px',
      color:'#ABABB4',
   },
   textInputMobile: {
      alignSelf: 'stretch',
      width: '90%',
      paddingHorizontal: 11,
      paddingVertical: 10,
      color:'#000000',
   },
   countrCode: {
      width: '30%',
   },
   passwordInput: {
      alignSelf: 'stretch',
      paddingHorizontal: 11,
      paddingVertical: 10,
      width: '90%',
      color:'#000000',
   },
   LoginButton: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FD264F',
      width: '100%',
      height: 56,
      marginTop: 30,
      borderRadius: 8,
      
   },
   forgotPass: {
      // flex: 1,
      paddingTop:14,
      alignSelf:'flex-end',
   },
   passwordForgotten: {
      color: '#FD264F',
      fontSize: 14,
      fontWeight: '600',
      // lineHeight: '18px'
   },
   activityIndicator: {
      position: 'absolute',
      alignSelf: 'center',
   },
   loginText: {
      color: '#ffffff',
      fontWeight: '600',
      fontSize: 18,
      // lineHeight: '18px',
   },
   loginContainer: {
      // justifyContent: 'flex-end',
      // alignItems: 'center',
      // flexDirection: 'row',
      width: '100%',
      paddingHorizontal: 10,
      paddingVertical: 5,
   },
   noAccount: {
      paddingTop: 14,
      alignSelf:'center',
   },
   noAccountText: {
      color: "#FD264F",
      fontSize: 16,
      // lineHeight:'18px',
   },
   eyeIcon: {
      marginTop:5,
   },
   mobileContainer: {
      width: '100%',
      flexDirection: 'row',
      paddingHorizontal: 27,
      paddingVertical: 7,
      marginTop: 40,
      backgroundColor:'#F2F2F4',
      borderRadius: 15,
      // overflow: 'hidden'
   },
   headerContainer: {
      width: '100%',
      height: '10%',
      flexDirection: 'column',
      paddingHorizontal: 10,
      paddingVertical: 5,
   },
   headerText: {
      fontSize: 17,
      color: 'grey',
   },
});
