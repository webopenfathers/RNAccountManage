/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import { StatusBar, StyleSheet, SafeAreaView } from 'react-native';
import Home from './src/modules/Home'


function App() {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingTop: StatusBar.currentHeight,
    width: '100%',
    height: '100%',
    backgroundColor: '#f5f5f5'
  },
});

export default App;
