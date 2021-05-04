import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';


class PhonicSoundButton extends React.Component {

constructor(props){
  super(props);
  this.state={
    pressedButtonIndex : ''
  }

}
    playSound = async(soundChunk)=>{
        var soundLink = 'https://s3-whitehatjrcontent.whjr.online/phones/' + soundChunk + '.mp3';
        await Audio.Sound.createAsync(
            {
                uri: soundLink
            },
            {shouldPlay : true}
        )
    }

    render(){


        return(
          <TouchableOpacity
          style={
            this.props.buttonIndex === this.state.pressButtonIndex
                        ? [styles.chunkButton, { backgroundColor: 'purple' }]
                        : [styles.chunkButton, { backgroundColor: 'red' }]
            }
          onPress={() => {
            this.setState({ pressButtonIndex: this.props.buttonIndex });
            this.playSound(this.props.soundChunk);
          }}>
          <Text style={
            this.props.buttonIndex === this.state.pressButtonIndex
                          ? [styles.displayText, { color: 'white' }]
                          : [styles.displayText, { color: 'white' }]
          }>{this.props.wordChunk}</Text>
        </TouchableOpacity>

        );
    }
       
  
    }
  export default PhonicSoundButton;

  const styles = StyleSheet.create({
    displaytext:{
        alignSelf: 'center',
        justifyContent:'center',
        textAlign: 'center',
        fontWeight:'bold',
        fontSize: '50px'
      },
    chunkButton:{
      width: '40%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      borderRadius: 10,
      margin: 5,
      backgroundColor: 'red'
    }
  });
  