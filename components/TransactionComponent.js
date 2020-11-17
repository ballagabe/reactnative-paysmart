import React, { useState } from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text, 
  ImageBackground,
  TouchableHighlight,
  Modal, 
  Pressable,
  TextInput
} from 'react-native';
import { Picker } from '@react-native-community/picker'
import { Icon } from 'react-native-elements'
import HeaderComponent from './HeaderComponent';

const TransactionComponent = () => {
  
  const Item = ({ item }) => (
    <View 
      style={styles.expenseItem}
    >
      <Icon
        name={'' + item.icon}
        type='material'
        color='#636363'
        style={styles.icon}
      />
      <Text></Text>
      <View style={{flexDirection: "row"}}>
        <Text style={styles.expenseTitle}>{`${item.title}`}</Text>
        <Text style={styles.expensePrice}>{`${item.price}`}</Text>
      </View>
      <Pressable onPress={() => {
        setExpenses(expenses.filter(expense => expense.id != item.id));
      }}>
        <Icon
          name={'delete'}
          type='material'
          color='#636363'
          style={styles.deleteIcon}
        />
      </Pressable>
    </View>
  );

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState("fastfood");
  const [inputValue, setInputValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [expenses, setExpenses] = useState([
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Burger King',
      price: '12$',
      icon: 'fastfood'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'New shoes',
      price: '74$',
      icon: 'shop'
    },
    {
      id: '3ac68afc-c6a05-48d3-a4f8-fbd91aa97f63',
      title: 'Holiday',
      price: '25$',
      icon: 'explore'
    }
  ]);
  return (
    <>
      <ImageBackground style={{flex: 1}} 
        resizeMode='cover' 
        source={require('../src/images/gardient_backgorund.png')}>
        <HeaderComponent num={expenses.length} outcome={expenses.reduce((accum,item) => accum + item.price.split('$')[0] * 1, 0)}/>
        <View style={styles.transactions}>
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
          <FlatList
            data={expenses}
            renderItem={Item}
            keyExtractor={item => item.id}
            style={styles.expenseList}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </ImageBackground>

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
                <Picker.Item color='#636363' label="Food" value="fastfood" />
                <Picker.Item color='#636363' label="Dress" value="shop" />
                <Picker.Item color='#636363' label="Travel" value="explore" />
                <Picker.Item color='#636363' label="Other" value="money" />
              </Picker>
              <Text style={styles.formText}>Title</Text>
              <View style={styles.inputView}>
                <TextInput
                  style={styles.inputStyle}
                  placeholder='Expense title'
                  onChangeText={(inputValue, inputIndex) => setInputValue(inputValue)}
                />
              </View>
              <Text style={styles.formText}>Price</Text>
              <View style={styles.inputView}>
                <TextInput
                  keyboardType='number-pad'
                  style={styles.inputStyle}
                  placeholder='Expense price'
                  onChangeText={(priceValue, priceIndex) => setPriceValue(priceValue)}
                />
              </View>
            </View>
            <View style={styles.modalButtons}>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  setExpenses(expenses => [...expenses, {id:"oiqwner-7523477-"+Math.random(1000000,9999999), title:inputValue, price:priceValue + "$", icon:selectedValue+""}])
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
  transactions: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35
  },
  expenseList: {
    alignSelf: "center"
  },
  expenseItem: {
    flexDirection: "row",
    padding: 16,
    borderBottomWidth: 2,
    borderColor: '#d1d1d1'
  },
  expenseItemLast: {
    flexDirection: "row",
    padding: 16
  },
  expenseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#636363',
    textAlign: "center",
    width: 200
  },
  expensePrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#636363',
    textAlign: "center"
  },
  icon: {
    paddingRight: 20
  },
  addButton: {
    marginBottom: 5,
    marginTop: 10,
    backgroundColor: '#c5becc',
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
  },
  deleteIcon: {
    marginLeft: 30
  }
});
export default TransactionComponent;