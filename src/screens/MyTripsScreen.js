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
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {
  Avatar,
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

const MyTripsScreen = ({ navigation }) => {
  const theme = useTheme();

  return (
    <View style={styles.wrapper}>
      <Appbar.Header style={{ paddingHorizontal: 15 }}>
        <Appbar.BackAction
          icon="close"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content title="My Trips" />
      </Appbar.Header>
      <View style={styles.container}>
        <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />

        {/* <View style={styles.boardContainer}>
          <View style={styles.board}>
            <Text style={{ color: '#000000', fontSize: 15, fontWeight: '500' }}>
              Balance
            </Text>
            <Text
              style={{
                color: '#000000',
                fontSize: 24,
                fontWeight: '800',
              }}
            >
              N 12,000.00
            </Text>
            <View style={styles.requestButton}>
              <TouchableOpacity onPress={() => {}}>
                <View style={styles.requestText}>
                  <Text style={{ color: '#ffffff' }}>Withdraw</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View> */}
        <View
          style={{
            marginVertical: 30,
            marginHorizontal: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignContent: 'center',
              alignItems: 'center',
              backgroundColor: '#F1F5F9',
              borderRadius: 50,
              paddingVertical: 5,
              paddingHorizontal: 15,
              width: '40%',
            }}
          >
            <Text style={{ fontSize: 12, fontWeight: '400',color: '#475569', }}>From Date</Text>
            <Entypo name="calendar" size={20} color="black" />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignContent: 'center',
              alignItems: 'center',
              backgroundColor: '#F1F5F9',
              borderRadius: 50,
              paddingVertical: 5,
              paddingHorizontal: 15,
              width: '40%',
            }}
          >
            <Text style={{ fontSize: 12, fontWeight: '400',color: '#475569', }}>To Date</Text>
            <Entypo name="calendar" size={20} color="black" />
          </View>
          <View>
            <View
              style={{
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                backgroundColor: '#F1F5F9',
                borderRadius: 50,
                width: 50,
                height: 50,
              }}
            >
              <Ionicons name="md-funnel" size={20} color="black" />
            </View>
          </View>
        </View>
        <ScrollView>
          <View style={{ flexDirection: 'column', marginHorizontal: 5 }}>
            <View style={styles.trips}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    borderRadius: 50,
                    // padding: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#FB7185',
                    width: 50,
                    height: 50,
                  }}
                >
                  <Ionicons name="bicycle-outline" size={30} color="black" />
                </View>
                <View>
                  <View style={{ marginHorizontal: 15 }}>
                    <Text style={{ fontSize: 16, fontWeight: '500' }}>
                      Ikeja - Lekki Lagos
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: '400',
                        color: '#ABABB4',
                      }}
                    >
                      June 7, 2022 8:00am
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <View>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '400',
                      color: '#000000',
                    }}
                  >
                    #6,000
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '400',
                      color: '#6EB088',
                    }}
                  >
                    Delivered
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.trips}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    borderRadius: 50,
                    // padding: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#FB7185',
                    width: 50,
                    height: 50,
                  }}
                >
                  <Ionicons name="bicycle-outline" size={30} color="black" />
                </View>
                <View>
                  <View style={{ marginHorizontal: 15 }}>
                    <Text style={{ fontSize: 16, fontWeight: '500' }}>
                      Ikeja - Lekki Lagos
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: '400',
                        color: '#ABABB4',
                      }}
                    >
                      June 7, 2022 8:00am
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <View>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '400',
                      color: '#000000',
                    }}
                  >
                    #6,000
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '400',
                      color: '#6EB088',
                    }}
                  >
                    Delivered
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.trips}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    borderRadius: 50,
                    // padding: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#FB7185',
                    width: 50,
                    height: 50,
                  }}
                >
                  <Ionicons name="bicycle-outline" size={30} color="black" />
                </View>
                <View>
                  <View style={{ marginHorizontal: 15 }}>
                    <Text style={{ fontSize: 16, fontWeight: '500' }}>
                      Ikeja - Lekki Lagos
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: '400',
                        color: '#ABABB4',
                      }}
                    >
                      June 7, 2022 8:00am
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <View>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '400',
                      color: '#000000',
                    }}
                  >
                    #6,000
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '400',
                      color: '#FD264F',
                    }}
                  >
                    Canceled
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.trips}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    borderRadius: 50,
                    // padding: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#FB7185',
                    width: 50,
                    height: 50,
                  }}
                >
                  <Ionicons name="bicycle-outline" size={30} color="black" />
                </View>
                <View>
                  <View style={{ marginHorizontal: 15 }}>
                    <Text style={{ fontSize: 16, fontWeight: '500' }}>
                      Ikeja - Lekki Lagos
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: '400',
                        color: '#ABABB4',
                      }}
                    >
                      June 7, 2022 8:00am
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <View>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '400',
                      color: '#000000',
                    }}
                  >
                    #6,000
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '400',
                      color: '#6EB088',
                    }}
                  >
                    Delivered
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.trips}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    borderRadius: 50,
                    // padding: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#FB7185',
                    width: 50,
                    height: 50,
                  }}
                >
                  <Ionicons name="bicycle-outline" size={30} color="black" />
                </View>
                <View>
                  <View style={{ marginHorizontal: 15 }}>
                    <Text style={{ fontSize: 16, fontWeight: '500' }}>
                      Ikeja - Lekki Lagos
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: '400',
                        color: '#ABABB4',
                      }}
                    >
                      June 7, 2022 8:00am
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <View>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '400',
                      color: '#000000',
                    }}
                  >
                    #6,000
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '400',
                      color: '#6EB088',
                    }}
                  >
                    Delivered
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.trips}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    borderRadius: 50,
                    // padding: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#FB7185',
                    width: 50,
                    height: 50,
                  }}
                >
                  <Ionicons name="bicycle-outline" size={30} color="black" />
                </View>
                <View>
                  <View style={{ marginHorizontal: 15 }}>
                    <Text style={{ fontSize: 16, fontWeight: '500' }}>
                      Ikeja - Lekki Lagos
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: '400',
                        color: '#ABABB4',
                      }}
                    >
                      June 7, 2022 8:00am
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <View>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '400',
                      color: '#000000',
                    }}
                  >
                    #6,000
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '400',
                      color: '#6EB088',
                    }}
                  >
                    Delivered
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.trips}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    borderRadius: 50,
                    // padding: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#FB7185',
                    width: 50,
                    height: 50,
                  }}
                >
                  <Ionicons name="bicycle-outline" size={30} color="black" />
                </View>
                <View>
                  <View style={{ marginHorizontal: 15 }}>
                    <Text style={{ fontSize: 16, fontWeight: '500' }}>
                      Ikeja - Lekki Lagos
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: '400',
                        color: '#ABABB4',
                      }}
                    >
                      June 7, 2022 8:00am
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <View>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '400',
                      color: '#000000',
                    }}
                  >
                    #6,000
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '400',
                      color: '#6EB088',
                    }}
                  >
                    Delivered
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.trips}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    borderRadius: 50,
                    // padding: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#FB7185',
                    width: 50,
                    height: 50,
                  }}
                >
                  <Ionicons name="bicycle-outline" size={30} color="black" />
                </View>
                <View>
                  <View style={{ marginHorizontal: 15 }}>
                    <Text style={{ fontSize: 16, fontWeight: '500' }}>
                      Ikeja - Lekki Lagos
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: '400',
                        color: '#ABABB4',
                      }}
                    >
                      June 7, 2022 8:00am
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <View>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '400',
                      color: '#000000',
                    }}
                  >
                    #6,000
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '400',
                      color: '#6EB088',
                    }}
                  >
                    Delivered
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default MyTripsScreen;

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
  header: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backIcon: {
    // marginBottom: 57,
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
    padding: 20,
    alignContent: 'center',
    alignItems: 'stretch',
    flexDirection: 'column',
    color: '#000000',
    justifyContent: 'space-between',
    backgroundColor: '#FFE4E6',
    borderRadius: 12,
    // paddingVertical:50,
  },
  board: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingHorizontal: 1,
    paddingVertical: 5,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  trips: {
    paddingBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
  tripsMade: {
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 32,
    backgroundColor: '#130102',
    // borderTopLeftRadius: 12,
    // borderTopRightRadius: 12,
  },
  pickupBox: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  stepperContainer: {
    flexDirection: 'row',
    // paddingHorizontal:10
  },
  singleStepper: {
    // flexDirection: 'column',
    // paddingHorizontal: 5,
    // justifyContent: 'space-between',
    width: '90%',
  },
  stepper: {
    paddingRight: 5,
  },
  elipsis: {
    transform: [{ rotate: '90deg' }],
    paddingVertical: 10,
    fontSize: 12,
    fontWeight: '900',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#979595',
  },
  requestButton: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 10,
    padding: 10,
    borderRadius: 50,
    position: 'relative',
    // top: '20%',
    // bottom: '3%',
    alignItems: 'center',
    color: '#ffffff',
    width: '40%',
    borderBottomWidth: 0,
    backgroundColor: '#FD264F',
    shadowColor: 'transparent',
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
    },
  },
});
