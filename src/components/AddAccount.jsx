import React, { useImperativeHandle, useState } from 'react';

import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { getUUID } from '../utils/uuid';
import { save, load } from '../utils/storage';

const AddModal = ({ countRef, refreshData }) => {
  const [visible, setVisible] = useState(false);
  const [id, setId] = useState('');
  const [type, setType] = useState('游戏');
  const [name, setName] = useState('');
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');

  const show = () => {
    setVisible(true);
    setId(getUUID());
  };

  const hide = () => {
    setVisible(false);
  };

  useImperativeHandle(countRef, () => ({
    show,
  }));

  // 保存
  const onSavePress = async () => {
    const newAccount = {
      id,
      type,
      name,
      account,
      password,
    };

    const data = await load('accountList');
    const accountList = data ? JSON.parse(data) : [];
    accountList.push(newAccount);
    await save('accountList', JSON.stringify(accountList));
    setType('游戏');
    setName('');
    setAccount('');
    setPassword('');
    hide();
    refreshData();
  };

  const renderTitle = () => {
    const styles = StyleSheet.create({
      titleLayout: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
      },
      titleTxt: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      closeButton: {
        position: 'absolute',
        right: 6,
      },
      closeImg: {
        width: 28,
        height: 28,
        resizeMode: 'contain',
      },
    });
    return (
      <View style={styles.titleLayout}>
        <Text style={styles.titleTxt}>添加账号</Text>
        <TouchableOpacity style={styles.closeButton} onPress={hide}>
          <Image
            style={styles.closeImg}
            source={require('../assets/icon_close_modal.png')}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderType = () => {
    const styles = StyleSheet.create({
      typesLayout: {
        width: '100%',
        height: 32,
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center',
      },
      tab: {
        flex: 1,
        height: '100%',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#c0c0c0',
      },
      leftTab: {
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
      },
      rightTab: {
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
      },

      moveLeft1Pix: {
        marginLeft: -1,
      },

      tabTxt: {
        fontSize: 14,
      },
    });

    const typesArray = ['游戏', '平台', '银行卡', '其他'];

    return (
      <View style={styles.typesLayout}>
        {typesArray.map((item, index) => (
          <TouchableOpacity
            style={[
              styles.tab,
              index === 0 ? styles.leftTab : index === 3 ? styles.rightTab : {},
              index > 0 && styles.moveLeft1Pix,
              { backgroundColor: type === item ? '#3050ff' : 'transparent' },
            ]}
            key={index}
            onPress={() => setType(item)}
          >
            <Text
              style={[
                styles.tabTxt,
                { color: type === item ? 'white' : '#666666' },
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderName = () => {
    const styles = StyleSheet.create({
      input: {
        width: '100%',
        height: 40,
        backgroundColor: '#f0f0f0',
        marginTop: 8,
        borderRadius: 8,
        paddingHorizontal: 12,
        fontSize: 16,
        color: '#333333',
      },
    });

    return (
      <TextInput
        value={name}
        style={styles.input}
        maxLength={20}
        onChangeText={text => setName(text)}
      />
    );
  };

  const renderAccount = () => {
    const styles = StyleSheet.create({
      input: {
        width: '100%',
        height: 40,
        backgroundColor: '#f0f0f0',
        marginTop: 8,
        borderRadius: 8,
        paddingHorizontal: 12,
        fontSize: 16,
        color: '#333333',
      },
    });

    return (
      <TextInput
        value={account}
        style={styles.input}
        maxLength={20}
        onChangeText={text => setAccount(text)}
      />
    );
  };

  const renderPassword = () => {
    const styles = StyleSheet.create({
      input: {
        width: '100%',
        height: 40,
        backgroundColor: '#f0f0f0',
        marginTop: 8,
        borderRadius: 8,
        paddingHorizontal: 12,
        fontSize: 16,
        color: '#333333',
      },
    });

    return (
      <TextInput
        value={password}
        style={styles.input}
        maxLength={20}
        onChangeText={text => setPassword(text)}
      />
    );
  };

  const renderButton = () => {
    const styles = StyleSheet.create({
      saveButton: {
        width: '100%',
        height: 44,
        backgroundColor: '#3050ff',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 8,
        marginBottom: 6,
      },
      saveTxt: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
      },
    });

    return (
      <TouchableOpacity style={styles.saveButton} onPress={onSavePress}>
        <Text style={styles.saveTxt}>保 存</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      visible={visible}
      onRequestClose={hide}
      transparent={true}
      statusBarTranslucent={true}
      animationType="fade"
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.root}
      >
        <View style={styles.countent}>
          {renderTitle()}
          <Text style={styles.subTitleTxt}>账号类型</Text>
          {renderType()}
          <Text style={styles.subTitleTxt}>账号名称</Text>
          {renderName()}
          <Text style={styles.subTitleTxt}>账号</Text>
          {renderAccount()}
          <Text style={styles.subTitleTxt}>密码</Text>
          {renderPassword()}
          {renderButton()}
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default AddModal;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#00000060',
    justifyContent: 'center',
    alignItems: 'center',
  },

  countent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
  },
  subTitleTxt: {
    fontSize: 12,
    color: '#666666',
    marginTop: 16,
  },
});
