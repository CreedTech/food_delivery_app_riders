import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //   marginTop: '20%',
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    // textAlign: 'center',
    backgroundColor: '#000000a0',
  },
  login: {
    // marginRight: 10,
    width: 146,
    height: 56,
    marginLeft: 40,
    // marginTop: 30,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#FFE6EA',
    borderRadius: 10,
    // borderWidth: 1,
    borderColor: '#FFE6EA',
  },
  loginText: {
    color: '#000000',
    textAlign: 'center',
  },
  signup: {
    // marginRight: 10,
    width: 146,
    height: 56,
    marginLeft: 30,
    // marginTop: 30,
    paddingTop: 20,
    paddingBottom: 20,
    // backgroundColor: 'transparent',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFE6EA',
  },
  signupText: {
    color: '#fff',
    textAlign: 'center',
  },
});
