import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
   wrapper: {
      flex: 1,
      backgroundColor: '#fff',
   },
   container: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection:'column',
      marginTop: '15%',
      paddingVertical: 30,
      paddingHorizontal: 40,
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
      marginBottom: 20,
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
   input: {
      alignSelf: 'stretch',
      paddingHorizontal: 11,
      paddingVertical: 10,
      width: '100%',
      color:'#000000',
   },
   passInput: {
      alignSelf: 'stretch',
      paddingHorizontal: 11,
      paddingVertical: 10,
      width: '90%',
      color:'#000000',
   },
   eyeIcon: {
      marginTop:5,
   },
   registerButton: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FD264F',
      width: '100%',
      height: 56,
      marginTop: 20,
      borderRadius:8,
   },
   activityIndicator: {
      position: 'absolute',
      alignSelf: 'center',
   },
   registerText: {
      color: '#ffffff',
      fontWeight: '600',
      fontSize: 18,
      // lineHeight: '18px',
   },
   registerContainer: {
      width: '100%',
      // paddingHorizontal: 10,
      paddingVertical: 5,
   },
   noAccount: {
      paddingTop: 10,
      alignSelf: 'center',
      marginBottom: 105,
   },
   noAccountText: {
      color: "#FD264F",
      fontSize: 16,
      // lineHeight:'18px',
   },
   mobileContainer: {
      width: '100%',
      flexDirection: 'row',
      paddingHorizontal: 27,
      paddingVertical: 7,
      marginTop: 30,
      backgroundColor:'#F2F2F4',
      borderRadius:15,
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
