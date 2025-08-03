import { StyleSheet, TouchableOpacity, Image } from 'react-native';

const AddButton = ({ onClick }) => {
  return (
    <TouchableOpacity
      onPress={() => onClick()}
      activeOpacity={0.5}
      style={styles.addButton}
    >
      <Image source={require('../assets/icon_add.png')} style={styles.addImg} />
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    bottom: 64,
    right: 28,
  },

  addImg: {
    width: 56,
    height: 56,
    resizeMode: 'contain',
  },
});
