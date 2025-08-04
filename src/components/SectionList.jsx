import {
  SectionList,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

import icon_game from '../assets/icon_game.png';
import icon_platform from '../assets/icon_platform.png';
import icon_bank from '../assets/icon_bank.png';
import icon_other from '../assets/icon_other.png';
import icon_arrow from '../assets/icon_arrow.png';

const iconMap = {
  游戏: icon_game,
  平台: icon_platform,
  银行卡: icon_bank,
  其他: icon_other,
};

const SectionListCpn = ({ sectionData }) => {
  const renderItem = ({ item, index, section }) => {
    console.log(item, 'item');
    return (
      <View style={styles.itemLayout}>
        <Text style={styles.nameTxt}>{item.name}</Text>
        <View style={styles.accpwdLayout}>
          <Text style={styles.accpwdTxt}>{`账号：${item.account}`}</Text>
          <Text style={styles.accpwdTxt}>{`密码：${item.password}`}</Text>
        </View>
      </View>
    );
  };

  const renderSectionHeader = ({ section }) => {
    return (
      <View style={styles.groupHeader}>
        <Image style={styles.typeImg} source={iconMap[section.type]} />
        <Text style={styles.typeText}>{section.type}</Text>

        <TouchableOpacity style={styles.arrowContainer} onPress={() => {}}>
          <Image style={styles.arrowImg} source={icon_arrow} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SectionList
      sections={sectionData}
      keyExtractor={(item, index) => `${item}-${index}`}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      contentContainerStyle={styles.listContainer}
    />
  );
};

export default SectionListCpn;

const styles = StyleSheet.create({
  groupHeader: {
    width: '100%',
    height: 46,
    backgroundColor: 'white',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginTop: 12,
  },

  typeImg: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },

  typeText: {
    marginLeft: 16,
    fontSize: 16,
    color: '#333333',
    fontWeight: 'bold',
  },

  arrowContainer: {
    position: 'absolute',
    right: 0,
    padding: 16,
  },

  arrowImg: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },

  listContainer: {
    paddingHorizontal: 12,
  },

  itemLayout: {
    width: '100%',
    flexDirection: 'column',
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },

  nameTxt: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  accpwdLayout: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },

  accpwdTxt: {
    flex: 1,
    fontSize: 14,
    color: '#666',
    marginTop: 12,
    marginBottom: 6,
  },
});
