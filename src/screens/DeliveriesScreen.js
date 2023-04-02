import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Divider, Appbar } from 'react-native-paper';

const DeliveriesScreen = ({ navigation }) => {
  const theme = useTheme();

  return (
    <View style={styles.wrapper}>
      <Appbar.Header style={{ paddingHorizontal: 15 }}>
        <Appbar.Action icon="close" onPress={() => navigation.goBack()} />
        <Appbar.Content title="Requests" />
      </Appbar.Header>
      <View style={styles.container}>
        <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />

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
                  <View style={{ flexGrow: 9 }}>
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
                      flexGrow: 1,
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
                  <View style={{ flexGrow: 9 }}>
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
                  <View style={{ flexDirection: 'row', flexGrow: 1 }}>
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
                />
                <Text style={styles.elipsis}>. . . . </Text>
                <MaterialCommunityIcons
                  name="map-marker"
                  color="black"
                  size={23}
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
                  }}
                >
                  <View style={{ flexGrow: 9 }}>
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
                      flexGrow: 1,
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
                  <View style={{ flexGrow: 9 }}>
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
                  <View style={{ flexDirection: 'row', flexGrow: 1 }}>
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
                  <View style={{ flexGrow: 9 }}>
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
                      flexGrow: 1,
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
                  <View style={{ flexGrow: 9 }}>
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
                  <View style={{ flexDirection: 'row', flexGrow: 1 }}>
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
                  <View style={{ flexGrow: 9 }}>
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
                      flexGrow: 1,
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
                  <View style={{ flexGrow: 9 }}>
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
                  <View style={{ flexDirection: 'row', flexGrow: 1 }}>
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
    flexDirection: 'column',
    marginTop: '10%',
    paddingHorizontal: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontFamily: 'Poppins-Black',
  },
  backIcon: {
    fontFamily: 'Poppins-Black',
  },

  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '800',
    fontFamily: 'Poppins-Black',
  },
  boardContainer: {
    marginTop: 15,
    alignContent: 'center',
    alignItems: 'stretch',
    flexDirection: 'column',
    color: '#ffffff',
    justifyContent: 'space-between',
    backgroundColor: '#ffff',
    borderRadius: 12,
    borderColor: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderWidth: 0.2,
    shadowColor: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 1.5,
    elevation: 5,
  },
  board: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    fontFamily: 'Poppins-Black',
  },
  tripsMade: {
    textAlign: 'center',
    alignItems: 'center',
    fontFamily: 'Poppins-Black',
    fontSize: 32,
    backgroundColor: '#130102',
  },
  pickupBox: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  stepperContainer: {
    flexDirection: 'row',
    fontFamily: 'Poppins-Black',
  },
  singleStepper: {
    width: '90%',
  },
  stepper: {
    paddingRight: 5,
    fontFamily: 'Poppins-Black',
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
    fontFamily: 'Poppins-Black',
  },
});
