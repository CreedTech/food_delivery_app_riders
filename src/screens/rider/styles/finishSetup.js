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
    // marginTop: '20%',
    // paddingVertical: 20,
    // paddingHorizontal: 60,
    },
    innerContainer: {
        flex: 1,
        marginTop: '10%',
    paddingVertical: 63,
    paddingHorizontal: 20,
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
  startRiding: {
    // marginRight: 10,
      width: '100 %',
    height: 56,
    // marginLeft: 40,
    // marginTop: 30,
      paddingTop: 20,
    paddingHorizontal:50,
    paddingBottom: 20,
    backgroundColor: '#FF0000',
    borderRadius: 10,
    // borderWidth: 1,
    // borderColor: '#ffffff',
  },
  startRidingText: {
    color: '#ffffff',
    textAlign: 'center',
  },
  text: {
    color: '#6C6969',
    alignItems: 'center',
    width: 189,
    alignContent: 'center',
    textAlign: 'center',
    paddingBottom:20,
  },
});
