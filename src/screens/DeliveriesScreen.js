import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import { useWindowDimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

const RequestRoute = () => (
  <View style={styles.boardContainer}>
    <View style={styles.board}>
      <Text style={{ color: '#ffffff' }}>Earning Today</Text>
      <Text style={{ color: '#ffffff' }}>Total Trips Today</Text>
    </View>
    <View style={[styles.board, styles.tripsMade]}>
      <Text
        style={{
          color: '#ffffff',
          fontSize: 32,
          fontWeight: '900',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        N7,000
      </Text>
      <Text
        style={{
          color: '#ffffff',
          fontSize: 32,
          fontWeight: '900',
          alignItems: 'center',
          textAlign: 'center',
          paddingRight: 30,
        }}
      >
        7
      </Text>
    </View>
  </View>
);

const HistoryRoute = () => <View style={{ flex: 1 }} />;

const renderScene = SceneMap({
  requests: RequestRoute,
  history: HistoryRoute,
});

const DeliveriesScreen = ({ navigation }) => {
  const layout = useWindowDimensions();
  const { colors } = useTheme();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'requests', title: 'Requests' },
    { key: 'history', title: 'History' },
  ]);
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      activeColor={'red'}
      inactiveColor={'grey'}
      indicatorStyle={{
        backgroundColor: 'red',
      }}
      style={{
        marginTop: 25,
        backgroundColor: 'transparent',
        borderBottomColor: 'red',
      }}
    />
  );

  const theme = useTheme();

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
        <View style={styles.header}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity>
              <Feather
                name="chevron-left"
                color="black"
                size={30}
                style={styles.backIcon}
                onPress={() => navigation.goBack()}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={renderTabBar}
          initialLayout={{ width: layout.width }}
        />
      </View>
    </View>
  );
};

export default DeliveriesScreen;

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
    marginTop: '15%',
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  header: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backIcon: {
    // marginBottom: 57,
  },
  user: {
    margin: 15,
    textAlign: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '800',
  },
  overview: {
    marginVertical: 50,
    marginHorizontal: 30,
    justifyContent: 'space-around',
  },
    boardContainer: {
      marginTop: 15,
    padding: 30,
    alignContent: 'center',
    alignItems: 'stretch',
    flexDirection: 'column',
    color: '#ffffff',
    justifyContent: 'space-between',
    backgroundColor: '#200202',
    borderRadius: 12,
    // paddingVertical:50,
  },
  board: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tripsMade: {
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 32,
  },
  trips: {
    paddingBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
  requestButton: {
    display: 'flex',
    justifyContent: 'center',
    margin: 20,
    padding: 20,
    borderRadius: 50,
    position: 'relative',
    top: '20%',
    bottom: '3%',
    alignItems: 'center',
    color: '#ffffff',
    width: '80%',
    borderBottomWidth: 0,
    backgroundColor: '#ff0000',
    shadowColor: 'transparent',
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
    },
  },
  badge: {
    color: '#000000',
    borderRadius: 200,
    backgroundColor: '#ffffff',
    width: 16,
    height: 16,
    // padding: 5,
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  requestText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
