import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

const HeaderComponent: () => React$Node = () => {
  return (
    <>
      <View style={styles.header}>
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>PaySmart</Text>
          <Text style={styles.headerSubText}>Your daily transaction partner</Text>
        </View>
        <View style={styles.headerAvatarView}>
          <Image
            style={styles.headerAvatar}
            source={require('../src/images/avatar.png')}
          />
          <Text style={styles.notifications}>
            3
          </Text>
        </View>
      </View>
      <View style={styles.balanceNow}>
        <Text style={styles.balanceNowText}>Outcome: 32.44$</Text>
      </View>
    </>
)};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  headerTextView: {
    paddingLeft: 40,
    paddingTop: 50
  },
  headerText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: '#636363',
    textShadowOffset: {width: -0.05, height: 0.05},
    textShadowRadius: 40
  },
  headerSubText: {
    fontSize: 15,
    color: '#fff'
  },
  headerAvatarView: {
    flex: 1,
    flexDirection: "row",
    paddingRight: 40,
    paddingTop: 40
  },
  headerAvatar: {
    width: 80,
    height: 120,
    borderRadius: 20,
    position: 'absolute',
    marginTop: 40,
    marginLeft: 60
  },
  notifications: {
    position: 'absolute',
    marginTop: 45,
    marginLeft: 35,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 30,
    backgroundColor: '#874093',
    color: '#fff',
    fontSize: 15
  },
  balanceNowText: {
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 30,
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold'
  }
});
export default HeaderComponent;