import React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text, 
  ImageBackground
} from 'react-native';
import HeaderComponent from './HeaderComponent';
import { Icon } from 'react-native-elements'

const expenses = [
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
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Travel',
    price: '134$',
    icon: 'explore'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bee',
    title: 'Burger King',
    price: '12$',

    icon: 'fastfood'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63aa',
    title: 'New shoes',
    price: '74$',
    icon: 'shop'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72ddd',
    title: 'Travel',
    price: '134$',
    icon: 'explore'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28basda',
    title: 'Burger King',
    price: '12$',

    icon: 'fastfood'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa9das7f63',
    title: 'New shoes',
    price: '74$',
    icon: 'shop'
  },
  {
    id: '58694a0f-3da1-471f-bd9asd6-145571e29d72',
    title: 'Travel',
    price: '134$',
    icon: 'explore'
  },
];

const Item = ({ item }) => (
  <View style={item.id == '58694a0f-3da1-471f-bd9asd6-145571e29d72' ? styles.expenseItemLast : styles.expenseItem}>
    <Icon
      name={'' + item.icon}
      type='material'
      color='#636363'
      style={styles.icon}
    />
    <View style={{flexDirection: "row"}}>
      <Text style={styles.expenseTitle}>{`${item.title}`}</Text>
      <Text style={styles.expensePrice}>{`${item.price}`}</Text>
    </View>
  </View>
);

const TransactionComponent = () => {
  return (
    <>
      <ImageBackground style={{flex: 1}} 
        resizeMode='cover' 
        source={require('../src/images/gardient_backgorund.png')}>
        <HeaderComponent />
        <View style={styles.transactions}>
          <FlatList
            data={expenses}
            renderItem={Item}
            keyExtractor={item => item.id}
            style={styles.expenseList}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </ImageBackground>
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
  }
});
export default TransactionComponent;