import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const HelpComponent = () =>  {

  return (
    <>
      <View>
        <Text style={styles.headerText}>Tips for saving money</Text>
        <Text style={styles.headerText}>Record your expenses</Text>
        <Text style={styles.articleText}>The first step to start saving money is to figure out how much you spend. Keep track of all your expenses—that means every coffee, household item and cash tip.</Text>
        <Text style={styles.headerText}>Set savings goals</Text>
        <Text style={styles.articleText}>One of the best ways to save money is to set a goal. Start by thinking of what you might want to save for—perhaps you’re getting married, planning a vacation or saving for retirement. Then figure out how much money you’ll need and how long it might take you to save it.</Text>
        <Text style={styles.headerText}>Watch your savings grow</Text>
        <Text style={styles.articleText}>Review your budget and check your progress every month. Not only will this help you stick to your personal savings plan, but it also helps you identify and fix problems quickly. Understanding how to save money may even inspire you to find more ways to save and hit your goals faster.</Text>
      </View>
    </>
)};

const styles = StyleSheet.create({
headerText: {
  textAlign: 'center',
  fontSize: 20,
  margin: 10,
},
articleText:{
  textAlign: 'center',
  fontSize: 15,
  marginLeft: 40,
  marginRight: 40
}
});
export default HelpComponent;