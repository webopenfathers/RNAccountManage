import { useState } from 'react';
import { View, StyleSheet, Text, Switch } from 'react-native';

const HomeTitle = ({ onSwitchChange }) => {
  const [isSwitchOn, setIsSwitchOn] = useState(true);

  const onValueChange = value => {
    setIsSwitchOn(value);
    onSwitchChange(value);
  };

  return (
    <View style={styles.titleLayout}>
      <Text style={styles.titleText}>账号管理</Text>
      <Switch
        value={isSwitchOn}
        style={styles.switch}
        onValueChange={onValueChange}
      />
    </View>
  );
};

export default HomeTitle;

const styles = StyleSheet.create({
  titleLayout: {
    flexDirection: 'row',
    width: '100%',
    height: 46,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 18,
    color: '#333333',
    fontWeight: 'bold',
  },
  switch: {
    position: 'absolute',
    right: 12,
  },
});
