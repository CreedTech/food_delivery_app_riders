import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import { Appbar } from 'react-native-paper';

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
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: '400',
                        color: '#ABABB4',
                      }}
                    >
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
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: '400',
                        color: '#ABABB4',
                      }}
                    >
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
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: '400',
                        color: '#ABABB4',
                      }}
                    >
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
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: '400',
                        color: '#ABABB4',
                      }}
                    >
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
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: '400',
                        color: '#ABABB4',
                      }}
                    >
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
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: '400',
                        color: '#ABABB4',
                      }}
                    >
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
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: '400',
                        color: '#ABABB4',
                      }}
                    >
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
    flexDirection: 'column',
    marginTop: '10%',
    paddingHorizontal: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '800',
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
  requestButton: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 10,
    padding: 10,
    borderRadius: 50,
    position: 'relative',
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
