import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
  Modal, 
  Pressable
} from 'react-native';
import { Picker } from '@react-native-community/picker'
import { Input } from 'react-native-elements';
import { Icon } from 'react-native-elements'

const HeaderComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Food");
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
      <View>
        <Pressable onPress={() => setModalVisible(true)}>
          <Icon
            name={'add'}
            type='material'
            color='#636363'
            style={styles.addButton}
          />
        </Pressable>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Add new expense</Text>
            <View style={styles.addForm}>
              <Text style={styles.formText}>Type</Text>
              <Picker
                selectedValue={selectedValue}
                style={styles.typePicker}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              >
                <Picker.Item color='#636363' label="Food" value="food" />
                <Picker.Item color='#636363' label="Dress" value="dress" />
                <Picker.Item color='#636363' label="Travel" value="travel" />
                <Picker.Item color='#636363' label="Other" value="other" />
              </Picker>
              <Text style={styles.formText}>Title</Text>
              <View style={styles.inputView}>
                <Input
                  style={styles.inputStyle}
                  placeholder='Expense title'
                />
              </View>
              <Text style={styles.formText}>Price</Text>
              <View style={styles.inputView}>
                <Input
                  keyboardType='number-pad'
                  style={styles.inputStyle}
                  placeholder='Expense price'
                />
              </View>
            </View>
            <View style={styles.modalButtons}>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Add</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#de0b51" }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
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
    marginTop: 50,
    marginBottom: 10,
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold'
  },
  addButton: {
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 30,
    width: 45,
    padding: 10,
    alignSelf: 'center'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    width: 300,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin: 5
  },
  modalButtons: {
    flexDirection: 'row'
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    paddingLeft: 5,
    paddingRight: 5,
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20,
    fontWeight: 'bold'
  },
  addForm: {
    paddingBottom: 10
  },
  formText: {
    fontSize: 17
  },
  typePicker: {
    width: 120
  },
  inputView: {
    width: 150
  },
  inputStyle: {
    fontSize: 14
  }
});
export default HeaderComponent;