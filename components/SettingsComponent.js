import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  Switch
} from 'react-native';
import { Picker } from '@react-native-community/picker'
import { Input } from 'react-native-elements';
import { Icon } from 'react-native-elements'

const SettingsComponent= () =>  {
  const [isEnabled, setIsEnabled] = useState(true);
  const [selectedValue, setSelectedValue] = useState("HUF");

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <>
      <ImageBackground style={{flex: 1}} 
        resizeMode='cover' 
        source={require('../src/images/gardient_backgorund.png')}>
        <View style={styles.header}>
          <View style={styles.headerAvatarView}>
            <Image
              style={styles.headerAvatar}
              source={require('../src/images/avatar.png')}
            />
            <View style={styles.iconChangeView}>
              <Icon
                name='refresh'
                type='font-awesome'
                color='#fff'
              />
            </View>
            <Text style={styles.headerText}>Gabor Balla</Text>
          </View>
        </View>
        <View style={styles.settingsInputs}>
          <Text style={styles.settingsText}>
            Select a currency
          </Text>
          <Picker
            selectedValue={selectedValue}
            style={styles.currencyPicker}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item color='#636363' label="HUF" value="huf" />
            <Picker.Item color='#636363' label="EUR" value="eur" />
            <Picker.Item color='#636363' label="USD" value="usd" />
          </Picker>
          <View style={styles.inputView}>
            <Text style={styles.settingsText}>
              Monthiversary
            </Text>
            <Input
              keyboardType='number-pad'
              style={styles.inputStyle}
              placeholder='Your monthiversary'
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.settingsText}>
              Change name
            </Text>
            <Input
              style={styles.inputStyle}
              placeholder='Your name'
            />
          </View>
          <View style={styles.switch}>
            <Text style={styles.settingsText}>
              Enable notifications
            </Text>
            <Switch
              trackColor={{ false: "#767577", true: "#9b85ab" }}
              thumbColor={isEnabled ? "#6f009e" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
      </ImageBackground>
    </>
)};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center'
  },
  headerAvatar: {
    width: 80,
    height: 120,
    marginTop: 30,
    borderRadius: 20
  },
  iconChangeView: {
    backgroundColor: '#874093',
    width: 35,
    height: 35,
    paddingTop: 5,
    borderRadius: 25,
    position: 'absolute',
    marginTop: 35,
    marginLeft: -10
  },
  headerText: {
    color: '#fff',
    marginTop: 15,
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  settingsInputs: {
    flex: 2,
    backgroundColor: '#fff',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35
  },
  settingsText: {
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 20,
    color: '#636363'
  },
  currencyPicker: {
    height: 50,
    width: 95,
    alignSelf: 'center'
  },
  inputView: {
    width: 200,
    alignSelf: 'center'
  },
  inputStyle: {
    textAlign: 'center'
  },
  switch: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
export default SettingsComponent;