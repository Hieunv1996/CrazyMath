/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  AsyncStorage,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';


export default class End extends Component {
  constructor(){
    super()
  }
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <View style = {styles.notifiBox}>
            <View style = {styles.notiText}>
                <View>
                    <Text style = {styles.textGameOver}>
                        GAME OVER!
                    </Text>
                </View>
                <View>
                    <Text style = {styles.textYourScore}>YOUR SCORE: {params.YOUR_SCORE}</Text>
                </View>
                <View>
                    <Text style = {styles.textBestScore}>BEST SCORE: {params.BEST_SCORE}</Text>
                </View>
            </View>
            <View style = {styles.twoButton}>
                <View style = {styles.viewBtnRestart}>
                    <TouchableHighlight onPress={this._onPressButtonRestart}>
                        <Image
                            style={styles.btnRestart}
                            source={require('./../res/restart.png')}
                        />
                    </TouchableHighlight>
                </View>
                <View style = {styles.viewBtnStop}>
                    <TouchableHighlight onPress={this._onPressButtonStop}>
                        <Image
                            style={styles.btnStop}
                            source={require('./../res/stop.png')}
                        />
                    </TouchableHighlight>
                </View>
            </View>
        </View>
      </View>
    );
  }
  _onPressButtonRestart=() =>{
    this._updateBestScore();
    this.props.navigation.navigate('PlayScreen')
  }
  _onPressButtonStop=() =>{
    this._updateBestScore();
    this.props.navigation.navigate('Welcome')
  }

  _updateBestScore(){
    const { params } = this.props.navigation.state;
    if(params.BEST_SCORE < params.YOUR_SCORE){
        AsyncStorage.setItem("BEST_SCORE", params.YOUR_SCORE + '');
        AsyncStorage.getItem("BEST_SCORE").then((value) => {
            console.log('end: ' + value);
          }).done();
    }
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    notifiBox: {
        height: 300,
        alignSelf: 'stretch',
        backgroundColor: '#ced6e2',
        alignItems: 'center',
    },
    notiText: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    twoButton: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    viewBtnStop: {
        flex: 1,
        alignItems: 'center',
        marginRight: 50
    },
    viewBtnRestart: {
        flex: 1,
        alignItems: 'center',
        marginLeft: 50
    },
    textGameOver: {
        fontSize: 35,
        color: '#ed1f1c',
        fontWeight: 'bold',
    },
    textYourScore: {
        fontSize: 28,
        color: '#4dcc26',
        fontWeight: 'bold',
    },
    textBestScore: {
        fontSize: 28,
        color: '#267ecc',
        fontWeight: 'bold',
    },
    btnRestart: {
        backgroundColor: '#1fcc1c',
        height: 70,
        width: 70,
    },
    btnStop: {
        backgroundColor: '#e81d0b',
        height: 70,
        width: 70,
    }
  });
  
