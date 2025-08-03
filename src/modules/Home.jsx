import { useRef } from 'react';
import { View, StyleSheet } from 'react-native';

import HomeTitle from '../components/HomeTitle';
import AddButton from '../components/AddButton';
import AddAccount from '../components/AddAccount';

function Home() {
  const countRef = useRef(null);
  const onClick = () => {
    countRef.current?.show();
  };

  return (
    <View style={styles.root}>
      <HomeTitle />
      <AddAccount countRef={countRef} />
      <AddButton onClick={onClick} />
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
