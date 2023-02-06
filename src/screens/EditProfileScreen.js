import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { Avatar } from 'react-native-elements';
import {
  Title,
  Caption,
  Paragraph,
  Drawer,
  TouchableRipple,
  Switch,
  Divider,
  Appbar,
} from 'react-native-paper';
import { useWindowDimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

const EditProfileScreen = ({ navigation }) => {
  const theme = useTheme();

  return (
    <KeyboardAvoidingView style={styles.wrapper}  enabled>
      <ScrollView>
      <Appbar.Header style={{ paddingHorizontal: 15 }}>
        <Appbar.Action icon="close" onPress={() => navigation.goBack()} />
      </Appbar.Header>
      <View style={styles.container}>
        <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />

        <View
          style={{
            marginVertical: 30,
            marginHorizontal: 5,
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          {/* <Avatar.Image
              style={{ color: '#E3E3E3', backgroundColor: '#E3E3E3' }}
              source={require('../assets/images/profile.png')}
              size={72}
                  /> */}
          <Avatar
            rounded
            source={require('../assets/images/profile.png')}
            size={100}
          >
            <Avatar.Accessory size={30} style={{ color: 'red' }} />
          </Avatar>
        </View>
        <View>
          <Text style={{color:'#808080'}}>Personal Info</Text>
        </View>
        <View style={{justifyContent:'space-between', alignContent:'stretch'}}>
          {/* <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} enabled> */}
            {/* <ScrollView> */}
            <View style={styles.mobileContainer}>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            placeholderStyle={{ fontSize: 40, }}
            autoCapitalize="none"
            selectionColor="#FD264F"
            // onChangeText={(val) => handlePasswordChange(val)}
          />
        </View>
        <View style={styles.mobileContainer}>
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            placeholderStyle={{ fontSize: 40, }}
            autoCapitalize="none"
            selectionColor="#FD264F"
            // onChangeText={(val) => handlePasswordChange(val)}
          />
        </View>
        <View style={styles.mobileContainer}>
          <TextInput
            style={styles.input}
            placeholder="Alternative Phone number"
            placeholderStyle={{ fontSize: 40, }}
            autoCapitalize="none"
            selectionColor="#FD264F"
            // onChangeText={(val) => handlePasswordChange(val)}
          />
        </View>
        <View style={styles.mobileContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email address"
            placeholderStyle={{ fontSize: 40, }}
            autoCapitalize="none"
            selectionColor="#FD264F"
            // onChangeText={(val) => handlePasswordChange(val)}
          />
        </View>
          {/* </ScrollView> */}
        
        {/* </KeyboardAvoidingView> */}
        <View style={styles.requestButton}>
            <TouchableOpacity
              onPress={() => {
                // navigation.navigate('DeliveriesScreen')
            }}
            >
              <View
                style={styles.requestText}
              >
                <Text style={{ color: '#ffffff' }}>Save</Text>
                
              </View>
            </TouchableOpacity>
          </View>
        </View>
        </View>
        </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    flexDirection: 'column',
    // alignItems: 'flex-end',
    marginTop: '5%',
    // paddingVertical: 20,
    paddingHorizontal: 30,
  },
  requestText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  requestButton: {
    display: 'flex',
    justifyContent:"center",
    // margin: 20,
    marginTop: 50,
    padding: 20,
    borderRadius: 20,
    position: 'relative',
    // top: '20%',
    bottom: 0,
    alignItems: 'center',
    color: '#ffffff',
    width: '100%',
    borderBottomWidth: 0,
    backgroundColor: '#FD264F',
    shadowColor: 'transparent',
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
    },
  },
  mobileContainer: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 27,
    paddingVertical: 7,
    marginTop: 20,
    // backgroundColor: '#F2F2F4',
    borderWidth: 2,
    borderColor:'#F2F2F4',
    borderRadius: 15,
    // overflow: 'hidden'
  },
  input: {
    alignSelf: 'stretch',
    paddingHorizontal: 11,
    paddingVertical: 10,
    width: '100%',
    color: '#000000',
    backgroundColor: 'transparent',
  },
});