/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ALert,
  TouchableHighlight
} from 'react-native';

var isTrue, isPlus, num1, num2, result, calc;

export default class PlayScreen extends Component {
  constructor(){
    super()
    this.state = {
      score: 0,
    }
    this._renderQuestion();
  }
  render() {
    return (
      <View style={styles.container}>
        
        <View style = {styles.panlelTop}>
          <View style = {styles.bestScore}>
            <Text style = {styles.scoreText}>
              BEST: 20
            </Text>
          </View>
          <View style = {styles.yourscore}>
            <Text style = {styles.scoreText}>
              SCORE: {this.state.score}
            </Text>
          </View>
        </View>

        <View style = {styles.panelCenter}>
        <Text style = {styles.calculate}>{calc}</Text>
        </View>
        <View style = {styles.panelBottom}>
            <View style = {styles.buttonFalse}>
                <TouchableHighlight onPress={this._checkButtonFalse}>
                    <Image
                        style={styles.imageButtonFalse}
                        source={require('./../res/lose.png')}
                    />
                </TouchableHighlight>
            </View>
            <View style = {styles.buttonTrue}>
                <TouchableHighlight onPress={this._checkButtonTrue}>
                    <Image
                        style={styles.imageButtonTrue}
                        source={require('./../res/tick.png')}
                    />
                </TouchableHighlight>
            </View>
        </View>
      </View>
    );
  }

  _checkButtonTrue=() => {
    console.log('btnT: ' + isTrue + ' ' + calc);
    if(isTrue){
      let newScore = this.state.score + 1;
      console.log(this.state.score);
      this.setState({
        score: newScore
      });
      this._renderQuestion();
    }else this._gameOver();
  }

  _checkButtonFalse=() =>{
    console.log('btnF: ' + isTrue + ' ' + calc);
    if(!isTrue){
      let newScore = this.state.score + 1;
      console.log(this.state.score);
      this.setState({
        score: newScore
      });
      this._renderQuestion();
    }else this._gameOver();
  }

  _renderQuestion() {
    num1 = this._randomBetween(1,5);
    num2 = this._randomBetween(1,5);
    isTrue = Math.random() >= 0.5 ? true : false;
    isPlus = Math.random() >= 0.5 ? true : false;
    result = num1;
    if(isPlus) result += num2;
    else result -= num2;
    if(!isTrue) {
      if(result % 2 == 0) result -= 1;
      else result += 1;
    }
    calc = num1 + (isPlus ? ' + ' : ' - ') + num2 + ' = ' + result;
  }

  _gameOver(){
    this.props.navigation.navigate('End')
  }

  _randomBetween(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}






const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    panlelTop: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      margin: 10
    },
    bestScore: {
      flex: 1,
      alignItems: 'flex-start',
    },
    yourscore: {
      flex: 1,
      alignItems: 'flex-end',
    },
    scoreText: {
      fontSize: 25
    },
    panelCenter: {
      flex: 7,
      justifyContent: 'center',
      alignItems: 'center'
    },
    calculate: {
        fontSize: 60,
        color: '#5BBD2B',
        fontWeight: 'bold'
    },
    panelBottom: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
    },
    buttonTrue: {
        flex: 1,
        alignItems: 'center',
    },
    buttonFalse: {
        flex: 1,
        alignItems: 'center',
    },
    imageButtonTrue: {
        backgroundColor: '#23ed04',
    },
    imageButtonFalse: {
        backgroundColor: '#f40602',
    },
  });
  
