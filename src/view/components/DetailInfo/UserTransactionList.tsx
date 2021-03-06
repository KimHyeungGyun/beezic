import React, { useEffect } from 'react';
import styled, { css } from '@emotion/native';
import { useObserver } from 'mobx-react';
import {
  Text, View, Image, TouchableOpacity, FlatList,
} from 'react-native';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { StackActions, useNavigation } from '@react-navigation/native';
import Carrot from '../../../assets/Beezic_Logo_carrot.png';
import Bee from '../../../assets/bee.png';
import Logo from '../../../assets/Beezic_Logo.png';
import DetailInfoStore from '../../../viewModel/DetailInfoStore';
import {
  AssignmentStore, ChatBotStore, CheckListStore, UserStore,
} from '../../../viewModel';

const AddTransactionStyle = css`
  height: 100;
  width: 100;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  margin-right: 14;
`;

const plusIconStyle = css`
  color: #D2691E;
  align-self: center;
`;

const TransactionListItem = styled.Image`
  width: 70;
  height: 70;
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 10;
  justify-content: center;
  margin-top: 10px;
  margin-right: 10px;
`;

const NoImage = styled.View`
  width: 70;
  height: 70;
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 10;
  justify-content: center;
  margin-top: 10px;
  margin-right: 10px;
  border: 1px solid #c8c8c8;
`;
const EmptyText = styled.Text`
  font-size: 20px;
  font-family: 'Jua-Regular';
  text-align: center;
`;

const AddTranscationIcon = styled.View`
  width: 60;
  height: 60;
  background-color: #FFEFD5;
  border-radius: 20px;
  margin-bottom: 10;
  justify-content: center;
`;

const TransactionListTitle = styled.Text`
  color: #fff;
  font-size: 15;
  opacity: 0.7;
  font-family: 'Jua-Regular';
`;

const UserTransaction = styled.View`
  flex-direction: row;
  background-color: #fff;
`;

const AddText = styled.Text`
  color: #000;
  font-size: 15;
  font-family: 'Jua-Regular';
`;

const emptyImageStyle = css`
  margin-left: 13%;
  align-self: center; 
`;
const emptyTextStyle = css`
  font-size: 30px;
  color: #c8c8c8;
  font-family: 'Jua-Regular';
`;

const userTransactionList = (): JSX.Element => {
  const navigation = useNavigation();
  const navigationChatbot = () => {
    ChatBotStore.initChatbotState();
    AssignmentStore.initAssignmentState();
    CheckListStore.initCheckListState();
    navigation.dispatch(
      StackActions.popToTop(),
      navigation.navigate('MainStackNavigator', { screen: 'TransactionInfo' }),
    );
  };

  return useObserver(() => (
    <View>
      <TransactionListTitle>나의 직거래 리스트</TransactionListTitle>
      <UserTransaction>
        <TouchableOpacity onPress={navigationChatbot} style={AddTransactionStyle}>
          <AddTranscationIcon>
            <FontAwesomeIcon icon={faPlus} style={plusIconStyle} size={25} />
          </AddTranscationIcon>
          <AddText>비직 추가</AddText>
        </TouchableOpacity>
        {
         DetailInfoStore.targetTransaction.itemImages.length !== 0
           ? (
             <FlatList
               horizontal
               data={DetailInfoStore.targetTransaction.itemImages}
               renderItem={({ item }) => (
                 <View>
                   <TransactionListItem source={{ uri: `data:image/png;base64,${item.fileUri}` }} />
                 </View>
               )}
             />
           )
           : (
             <View style={emptyImageStyle}>
               <Text style={emptyTextStyle}>
                 사 진 없 음...
               </Text>
             </View>
           )
}

      </UserTransaction>
    </View>
  ));
};

export default userTransactionList;
