import { useRef, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { load } from '../utils/storage';

import HomeTitle from '../components/HomeTitle';
import AddButton from '../components/AddButton';
import AddAccount from '../components/AddAccount';
import SectionListCpn from '../components/SectionList';

function Home() {
  const countRef = useRef(null);
  const [sectionData, setSectionData] = useState([]);

  const getData = async () => {
    const data = await load('accountList');
    const accountList = JSON.parse(data);
    const gameList = accountList.filter(item => item.type === '游戏');
    const platformList = accountList.filter(item => item.type === '平台');
    const bankList = accountList.filter(item => item.type === '银行卡');
    const otherList = accountList.filter(item => item.type === '其他');
    const sectionFormatData = [
      {
        type: '游戏',
        data: gameList,
      },
      {
        type: '平台',
        data: platformList,
      },
      {
        type: '银行卡',
        data: bankList,
      },
      {
        type: '其他',
        data: otherList,
      },
    ];
    setSectionData(sectionFormatData);
  };

  useEffect(() => {
    getData();
  }, []);

  const onClick = () => {
    countRef.current?.show();
  };

  return (
    <View style={styles.root}>
      <HomeTitle />
      <SectionListCpn sectionData={sectionData} />
      <AddButton onClick={onClick} />
      <AddAccount countRef={countRef} refreshData={() => getData()} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F0F0F0',
  },
});

export default Home;
