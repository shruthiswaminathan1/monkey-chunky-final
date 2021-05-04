
import { SafeAreaProvider } from 'react-native-safe-area-context'
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { Header } from 'react-native-elements'
import db from './localdb';
import PhonicSoundButton from './phonicsoundbutton'


console.log(db['the'].chunks);

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      text: '',
      chunks: [],
      phonicSounds: []

    }

  }


  render() {
    return (
      <SafeAreaProvider style={styles.container}>

        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Monkey Chunky', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />

        <Image style={styles.imageicon}
          source={{
            uri: 'https://www.jamiesale-cartoonist.com/wp-content/uploads/cartoon-monkey-free.png ',
          }
          }
        />

        <TextInput
          style={styles.inputtext}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            var word = this.state.text.toLowerCase().trim();
            db[word] ? (
              this.setState({ chunks: db[word].chunks }),
              this.setState({ phonicSounds: db[word].phones })
            ) :
              Alert.alert("The word does not exist in our database");
          }}>
          <Text style={styles.buttontext}>Press me :) </Text>
        </TouchableOpacity>
        <View>
          {this.state.chunks.map((item, index) => {
            return (
              <PhonicSoundButton
                wordChunk={this.state.chunks[index]}
                soundChunk={this.state.phonicSounds[index]}
                buttonIndex={index}
              />
            );
          })}
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
  inputtext: {
    textAlign: 'center',
    marginLeft: '0px',
    marginTop: '50px',
    alignSelf: 'center',
    alignContent: 'center',
    width: '250px',
    height: '40px',
    borderWidth: 1,
    alignContent: 'center'
  },
  button: {
    alignContent: 'center',
    marginLeft: '-px',
    marginTop: '200px'

  },
  buttontext: {

    alignSelf: 'center',
    marginTop: '-150px',
    backgroundColor: '#fc6b',
    width: '100px',
    height: '28px',
    padding: '3px',
    textAlign: 'center',
    fontWeight: 'bold',
    borderRadius: '20px',


  },

  imageicon: {
    width: '200px',
    height: '200px',
    alignSelf: 'cneter',
    alignContent: 'center',
    justifyContent: 'center',
    marginLeft: '550px',


  },
  chunkButton: {
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
