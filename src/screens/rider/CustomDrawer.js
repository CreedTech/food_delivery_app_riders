import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Avatar,ListItem } from 'react-native-elements';
import { DrawerItems } from 'react-navigation-drawer';
// import { NavigationActions } from 'react-navigation';

export default CustomDrawer = (props) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <SafeAreaView
        style={styles.container}
        forceInset={{ top: 'always', horizontal: 'never' }}
      >
        <View style={[styles.containHeader, { backgroundColor: '#000000' }]}>
          <View >
            <ListItem>
            <Avatar
              size="large"
              rounded
              source={{
                uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
              }}
              />
              <ListItem.Content>
                <ListItem.Title>
                John Mark
                </ListItem.Title>
                <ListItem.Subtitle>
                #4389Rider
                </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          </View>
        </View>
        <DrawerItems {...props} />
      </SafeAreaView>
    </ScrollView>
  );
};
