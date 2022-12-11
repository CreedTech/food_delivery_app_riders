import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
   wrapper: {
      flex: 1,
   },
   container: {
      flex: 1,
      backgroundColor: '#fff',
      // justifyContent: 'center',
      // alignItems: 'center',
      marginTop: '20%',
      paddingVertical: 95,
      paddingHorizontal: 60,
   },
   title: {
      fontSize: 32,
      fontWeight: '900',
      lineHeight: '34px',
      letterSpacing: '-0.01px',
      color:'#303030',
   },
   subtitle: {
      fontSize: 12,
      fontWeight: '400',
      lineHeight: '24px',
      letterSpacing: '-0.01px',
      color:'#ABABB4',
   },
   otpContainer: {
      flex: 1,
      paddingHorizontal: 70,
      alignContent: 'center',
      paddingLeft: 100,
      paddingRight:100,
      // width:'70%',
      justifyContent: 'center',
      alignItems: 'center',
   },
   verifyContainer: {
      justifyContent: 'flex-end',
      alignItems: 'center',
      flexDirection: 'row',
      width: '100%',
      paddingHorizontal: 10,
      paddingVertical: 5,
   },
   verifyButton: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FD264F',
      width: '100%',
      height: 56,
      marginTop: 15,
      borderRadius:'8px',
   },
   resendCode: {
      paddingTop: 14,
      alignSelf:'center',
   },
   resendCodeText: {
      color: "#FE8CA2",
      fontSize: "16px",
      lineHeight:'18px',
   },
   verifyText: {
      color: '#ffffff',
      fontWeight: 'bold',
   },
   headerContainer: {
      width: '100%',
      height: '10%',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 5,
   },
   headerText: {
      fontSize: 17,
      color: 'grey',
   },
   otpInputs: {
      tintColor: '#FD264F',
   },
});
