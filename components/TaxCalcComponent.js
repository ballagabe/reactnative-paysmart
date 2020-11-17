import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  Button
} from 'react-native';

const TaxCalcComponent = () =>  {
  const [amount, setAmount] = useState();
  const [result, setResult] = useState();
  
  let calcTax = () => {
    setResult(amount * 0.25);
  }

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
          </View>
        </View>
        <View style={styles.settingsInputs}>
        <Text style={styles.headerText}>Calculate your taxes</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder='Amount'
          keyboardType='number-pad'
          onChangeText={(amount, inputIndex) => setAmount(amount)}
        />
        <Button
          onPress={calcTax}
          title="Calculate tax"
          color="#841584"
          style={styles.buttonStyle}
        />
        <Text style={styles.resultText}>{result ? result + "$" : ""}</Text>
        <Text style={styles.attention}>This amount is just an example, it should not be taken seriously, there may be differences between the true values.</Text>
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
  inputStyle: {
    textAlign: 'center',
    fontSize: 18,
    margin: 30
  },
  switch: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    textAlign: 'center',
    fontSize: 25,
    paddingTop: 20
  },
  resultText: {
    alignSelf: 'center',
    margin: 40,
    fontSize: 18
  },
  attention: {
    fontSize: 10,
    marginTop: 100,
    textAlign: 'center'
  }
});
export default TaxCalcComponent;