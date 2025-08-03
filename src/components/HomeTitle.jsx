import { View, StyleSheet, Text } from 'react-native'

const HomeTitle = () => {

  return <View style={styles.titleLayout}>
    <Text style={styles.titleText}>账号管理</Text>
  </View>
}

export default HomeTitle

const styles = StyleSheet.create({
  titleLayout: {
    width: '100%',
    height: 46,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 18,
    color: '#333333',
    fontWeight: 'bold'
  }
})