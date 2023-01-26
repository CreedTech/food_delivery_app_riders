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

const WalletScreen = ({ navigation }) => {
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
        <Appbar.Content title="Wallet" />
      </Appbar.Header>
      <View style={styles.container}>
        <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />

        <View style={styles.boardContainer}>
          <View style={styles.board}>
            <Text style={{ color: '#000000', fontSize: 15, fontWeight: '500' }}>
              Balance
            </Text>
            <Text
              style={{
                color: '#000000',
                fontSize: 24,
                fontWeight: '800',
                //   alignItems: 'center',
                //   textAlign: 'center',
              }}
            >
              N 12,000.00
            </Text>
            <View style={styles.requestButton}>
              <TouchableOpacity
                onPress={() => {
                //   navigation.navigate('DeliveriesScreen');
                }}
              >
                <View style={styles.requestText}>
                  <Text style={{ color: '#ffffff' }}>Withdraw</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            marginVertical: 30,
            marginHorizontal: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: '600' }}>Transactions</Text>
          <Feather name="calendar" size={30} color="black" />
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
                  <Feather name="arrow-down-left" size={30} color="white" />
                </View>
                <View>
                  <View style={{ marginHorizontal: 15 }}>
                    <Text style={{ fontSize: 16, fontWeight: '500' }}>
                      Withdrawal
                    </Text>
                    <Text style={{ fontSize: 12, fontWeight: '400',color: '#ABABB4', }}>
                      June 7, 2022
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
                      color: '#F43F5E',
                    }}
                  >
                    -#6,000
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
                    backgroundColor: '#0EBC93',
                    width: 50,
                    height: 50,
                  }}
                >
                  <Feather name="arrow-up-right" size={30} color="white" />
                </View>
                <View>
                  <View style={{ marginHorizontal: 15 }}>
                    <Text style={{ fontSize: 16, fontWeight: '500' }}>
                    Received
                    </Text>
                    <Text style={{ fontSize: 12, fontWeight: '400',color: '#ABABB4', }}>
                      June 7, 2022
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
                      color: '#0EBC93',
                    }}
                  >
                    #6,000
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
                    backgroundColor: '#0EBC93',
                    width: 50,
                    height: 50,
                  }}
                >
                  <Feather name="arrow-up-right" size={30} color="white" />
                </View>
                <View>
                  <View style={{ marginHorizontal: 15 }}>
                    <Text style={{ fontSize: 16, fontWeight: '500' }}>
                    Received
                    </Text>
                    <Text style={{ fontSize: 12, fontWeight: '400',color: '#ABABB4', }}>
                      June 7, 2022
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
                      color: '#0EBC93',
                    }}
                  >
                    #6,000
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
                    backgroundColor: '#0EBC93',
                    width: 50,
                    height: 50,
                  }}
                >
                  <Feather name="arrow-up-right" size={30} color="white" />
                </View>
                <View>
                  <View style={{ marginHorizontal: 15 }}>
                    <Text style={{ fontSize: 16, fontWeight: '500' }}>
                    Received
                    </Text>
                    <Text style={{ fontSize: 12, fontWeight: '400',color: '#ABABB4', }}>
                      June 7, 2022
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
                      color: '#0EBC93',
                    }}
                  >
                    #6,000
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
                  <Feather name="arrow-down-left" size={30} color="white" />
                </View>
                <View>
                  <View style={{ marginHorizontal: 15 }}>
                    <Text style={{ fontSize: 16, fontWeight: '500' }}>
                      Withdrawal
                    </Text>
                    <Text style={{ fontSize: 12, fontWeight: '400',color: '#ABABB4', }}>
                      June 7, 2022
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
                      color: '#F43F5E',
                    }}
                  >
                    -#6,000
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
                  <Feather name="arrow-down-left" size={30} color="white" />
                </View>
                <View>
                  <View style={{ marginHorizontal: 15 }}>
                    <Text style={{ fontSize: 16, fontWeight: '500' }}>
                      Withdrawal
                    </Text>
                    <Text style={{ fontSize: 12, fontWeight: '400',color: '#ABABB4', }}>
                      June 7, 2022
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
                      color: '#F43F5E',
                    }}
                  >
                    -#6,000
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
                    backgroundColor: '#0EBC93',
                    width: 50,
                    height: 50,
                  }}
                >
                  <Feather name="arrow-up-right" size={30} color="white" />
                </View>
                <View>
                  <View style={{ marginHorizontal: 15 }}>
                    <Text style={{ fontSize: 16, fontWeight: '500' }}>
                    Received
                    </Text>
                    <Text style={{ fontSize: 12, fontWeight: '400',color: '#ABABB4', }}>
                      June 7, 2022
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
                      color: '#0EBC93',
                    }}
                  >
                    #6,000
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        {/* <View style={styles.boardContainer}>
          <View style={[styles.board, styles.tripsMade]}>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 12,
                fontWeight: '700',
                textAlign: 'center',
              }}
            >
              #1,000
            </Text>
            <Text
              style={{
                color: '#6EB088',
                fontSize: 8,
                fontWeight: '600',
              }}
            >
              See route{' '}
              <Ionicons
                name="ios-navigate"
                color="white"
                size={13}
                style={styles.backIcon}
              />
            </Text>
          </View>
          <View style={styles.pickupBox}>
            <View style={styles.stepperContainer}>
              <View style={styles.stepper}>
                <MaterialCommunityIcons
                  name="map-marker-radius"
                  color="black"
                  size={23}
                  // style={styles.backIcon}
                />
                <Text style={styles.elipsis}>. . . . </Text>
                <MaterialCommunityIcons
                  name="map-marker"
                  color="black"
                  size={23}
                  // style={styles.backIcon}
                />
              </View>
              <View style={styles.singleStepper}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 10,
                    width: '100%',
                    maxWidth: '100%',
                    // gap: 4,
                  }}
                >
                  <View style={{ flexGrow: '9' }}>
                    <Text
                      style={{
                        color: '#930101',
                        fontSize: 6,
                        fontWeight: '600',
                      }}
                    >
                      Pick from
                    </Text>
                    <Text
                      style={{
                        color: '#270101',
                        fontSize: 10,
                        fontWeight: '700',
                      }}
                    >
                      Lara Okelewa
                    </Text>
                    <Text
                      style={{
                        color: '#ABABB4',
                        fontSize: 8,
                        fontWeight: '400',
                      }}
                    >
                      {'CMS Garage, Marina Road, Lagos, Nigeria'.length > 39
                        ? `${'CMS Garage, Marina Road, Lagos, Nigeria'.slice(
                            0,
                            39
                          )}...`
                        : 'CMS Garage, Marina Road, Lagos, Nigeria'}
                    </Text>
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      flexGrow: '1',
                    }}
                  >
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingRight: 7,
                      }}
                    >
                      <Entypo name="map" size={25} />
                    </View>
                    <View
                      style={{
                        borderRadius: 50,
                        marginTop: 3,
                        // padding: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#FFC930',
                        width: 25,
                        height: 25,
                      }}
                    >
                      <Ionicons
                        name="ios-call-outline"
                        size={15}
                        color="white"
                      />
                    </View>
                  </View>
                </View>
                <Divider style={{ marginVertical: 10, width: '100%' }} />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 10,
                    // gap: 4,
                  }}
                >
                  <View style={{ flexGrow: '9' }}>
                    <Text
                      style={{
                        color: '#930101',
                        fontSize: 6,
                        fontWeight: '600',
                      }}
                    >
                      Deliver to
                    </Text>
                    <Text
                      style={{
                        color: '#270101',
                        fontSize: 10,
                        fontWeight: '700',
                      }}
                    >
                      Jide Sakin
                    </Text>
                    <Text
                      style={{
                        color: '#ABABB4',
                        fontSize: 8,
                        fontWeight: '400',
                      }}
                    >
                      {' '}
                      {'CMS Garage, Marina Road, Lagos, Nigeria'.length > 39
                        ? `${'CMS Garage, Marina Road, Lagos, Nigeria'.slice(
                            0,
                            39
                          )}...`
                        : 'CMS Garage, Marina Road, Lagos, Nigeria'}
                    </Text>
                  </View>
                  <View style={{ flexDirection: 'row', flexGrow: '1' }}>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingRight: 7,
                      }}
                    >
                      <Entypo name="map" size={25} />
                    </View>
                    <View
                      style={{
                        borderRadius: 50,
                        marginTop: 3,
                        // padding: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#6EB088',
                        width: 25,
                        height: 25,
                      }}
                    >
                      <Ionicons
                        name="ios-call-outline"
                        size={15}
                        color="white"
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.boardContainer}>
          <View style={[styles.board, styles.tripsMade]}>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 12,
                fontWeight: '700',
                textAlign: 'center',
              }}
            >
              #1,000
            </Text>
            <Text
              style={{
                color: '#6EB088',
                fontSize: 8,
                fontWeight: '600',
              }}
            >
              See route{' '}
              <Ionicons
                name="ios-navigate"
                color="white"
                size={13}
                style={styles.backIcon}
              />
            </Text>
          </View>
          <View style={styles.pickupBox}>
            <View style={styles.stepperContainer}>
              <View style={styles.stepper}>
                <MaterialCommunityIcons
                  name="map-marker-radius"
                  color="black"
                  size={23}
                  // style={styles.backIcon}
                />
                <Text style={styles.elipsis}>. . . . </Text>
                <MaterialCommunityIcons
                  name="map-marker"
                  color="black"
                  size={23}
                  // style={styles.backIcon}
                />
              </View>
              <View style={styles.singleStepper}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 10,
                    width: '100%',
                    maxWidth: '100%',
                    // gap: 4,
                  }}
                >
                  <View style={{ flexGrow: '9' }}>
                    <Text
                      style={{
                        color: '#930101',
                        fontSize: 6,
                        fontWeight: '600',
                      }}
                    >
                      Pick from
                    </Text>
                    <Text
                      style={{
                        color: '#270101',
                        fontSize: 10,
                        fontWeight: '700',
                      }}
                    >
                      Lara Okelewa
                    </Text>
                    <Text
                      style={{
                        color: '#ABABB4',
                        fontSize: 8,
                        fontWeight: '400',
                      }}
                    >
                      {'CMS Garage, Marina Road, Lagos, Nigeria'.length > 39
                        ? `${'CMS Garage, Marina Road, Lagos, Nigeria'.slice(
                            0,
                            39
                          )}...`
                        : 'CMS Garage, Marina Road, Lagos, Nigeria'}
                    </Text>
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      flexGrow: '1',
                    }}
                  >
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingRight: 7,
                      }}
                    >
                      <Entypo name="map" size={25} />
                    </View>
                    <View
                      style={{
                        borderRadius: 50,
                        marginTop: 3,
                        // padding: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#FFC930',
                        width: 25,
                        height: 25,
                      }}
                    >
                      <Ionicons
                        name="ios-call-outline"
                        size={15}
                        color="white"
                      />
                    </View>
                  </View>
                </View>
                <Divider style={{ marginVertical: 10, width: '100%' }} />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 10,
                    // gap: 4,
                  }}
                >
                  <View style={{ flexGrow: '9' }}>
                    <Text
                      style={{
                        color: '#930101',
                        fontSize: 6,
                        fontWeight: '600',
                      }}
                    >
                      Deliver to
                    </Text>
                    <Text
                      style={{
                        color: '#270101',
                        fontSize: 10,
                        fontWeight: '700',
                      }}
                    >
                      Jide Sakin
                    </Text>
                    <Text
                      style={{
                        color: '#ABABB4',
                        fontSize: 8,
                        fontWeight: '400',
                      }}
                    >
                      {' '}
                      {'CMS Garage, Marina Road, Lagos, Nigeria'.length > 39
                        ? `${'CMS Garage, Marina Road, Lagos, Nigeria'.slice(
                            0,
                            39
                          )}...`
                        : 'CMS Garage, Marina Road, Lagos, Nigeria'}
                    </Text>
                  </View>
                  <View style={{ flexDirection: 'row', flexGrow: '1' }}>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingRight: 7,
                      }}
                    >
                      <Entypo name="map" size={25} />
                    </View>
                    <View
                      style={{
                        borderRadius: 50,
                        marginTop: 3,
                        // padding: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#6EB088',
                        width: 25,
                        height: 25,
                      }}
                    >
                      <Ionicons
                        name="ios-call-outline"
                        size={15}
                        color="white"
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.boardContainer}>
          <View style={[styles.board, styles.tripsMade]}>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 12,
                fontWeight: '700',
                textAlign: 'center',
              }}
            >
              #1,000
            </Text>
            <Text
              style={{
                color: '#6EB088',
                fontSize: 8,
                fontWeight: '600',
              }}
            >
              See route{' '}
              <Ionicons
                name="ios-navigate"
                color="white"
                size={13}
                style={styles.backIcon}
              />
            </Text>
          </View>
          <View style={styles.pickupBox}>
            <View style={styles.stepperContainer}>
              <View style={styles.stepper}>
                <MaterialCommunityIcons
                  name="map-marker-radius"
                  color="black"
                  size={23}
                  // style={styles.backIcon}
                />
                <Text style={styles.elipsis}>. . . . </Text>
                <MaterialCommunityIcons
                  name="map-marker"
                  color="black"
                  size={23}
                  // style={styles.backIcon}
                />
              </View>
              <View style={styles.singleStepper}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 10,
                    width: '100%',
                    maxWidth: '100%',
                    // gap: 4,
                  }}
                >
                  <View style={{ flexGrow: '9' }}>
                    <Text
                      style={{
                        color: '#930101',
                        fontSize: 6,
                        fontWeight: '600',
                      }}
                    >
                      Pick from
                    </Text>
                    <Text
                      style={{
                        color: '#270101',
                        fontSize: 10,
                        fontWeight: '700',
                      }}
                    >
                      Lara Okelewa
                    </Text>
                    <Text
                      style={{
                        color: '#ABABB4',
                        fontSize: 8,
                        fontWeight: '400',
                      }}
                    >
                      {'CMS Garage, Marina Road, Lagos, Nigeria'.length > 39
                        ? `${'CMS Garage, Marina Road, Lagos, Nigeria'.slice(
                            0,
                            39
                          )}...`
                        : 'CMS Garage, Marina Road, Lagos, Nigeria'}
                    </Text>
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      flexGrow: '1',
                    }}
                  >
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingRight: 7,
                      }}
                    >
                      <Entypo name="map" size={25} />
                    </View>
                    <View
                      style={{
                        borderRadius: 50,
                        marginTop: 3,
                        // padding: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#FFC930',
                        width: 25,
                        height: 25,
                      }}
                    >
                      <Ionicons
                        name="ios-call-outline"
                        size={15}
                        color="white"
                      />
                    </View>
                  </View>
                </View>
                <Divider style={{ marginVertical: 10, width: '100%' }} />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 10,
                    // gap: 4,
                  }}
                >
                  <View style={{ flexGrow: '9' }}>
                    <Text
                      style={{
                        color: '#930101',
                        fontSize: 6,
                        fontWeight: '600',
                      }}
                    >
                      Deliver to
                    </Text>
                    <Text
                      style={{
                        color: '#270101',
                        fontSize: 10,
                        fontWeight: '700',
                      }}
                    >
                      Jide Sakin
                    </Text>
                    <Text
                      style={{
                        color: '#ABABB4',
                        fontSize: 8,
                        fontWeight: '400',
                      }}
                    >
                      {' '}
                      {'CMS Garage, Marina Road, Lagos, Nigeria'.length > 39
                        ? `${'CMS Garage, Marina Road, Lagos, Nigeria'.slice(
                            0,
                            39
                          )}...`
                        : 'CMS Garage, Marina Road, Lagos, Nigeria'}
                    </Text>
                  </View>
                  <View style={{ flexDirection: 'row', flexGrow: '1' }}>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingRight: 7,
                      }}
                    >
                      <Entypo name="map" size={25} />
                    </View>
                    <View
                      style={{
                        borderRadius: 50,
                        marginTop: 3,
                        // padding: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#6EB088',
                        width: 25,
                        height: 25,
                      }}
                    >
                      <Ionicons
                        name="ios-call-outline"
                        size={15}
                        color="white"
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View> */}
      </View>
    </View>
  );
};

export default WalletScreen;

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
    marginTop: '10%',
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
