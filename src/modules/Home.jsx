
import { View, StyleSheet } from 'react-native';
import HomeTitle from '../components/HomeTitle'

function Home() {
  return (
    <View style={styles.root}>
      <HomeTitle />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
  },
});

export default Home;
