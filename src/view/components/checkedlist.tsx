import React from 'react';
import { ScrollView } from 'react-native';
import styled from '@emotion/native';
import CheckedListItem from './checkedListItem.tsx';

const UserCheckText = styled.Text`
  font-size: 18;
  font-weight: bold;
  margin-left: 10;
  margin-top: 20;
  margin-bottom: 20;
`;

type Props = {
  checkItems: [];
  removeCheckItem: (id: number) => void;
}

const CheckedList = ({ checkItems, removeCheckItem } : Props) => (
  <>
    <UserCheckText>나의 직거래 체크 목록 :</UserCheckText>
    <ScrollView>
      {checkItems.map((checkItem) => (
        <CheckedListItem
          key={checkItem.id}
          discription={checkItem.discription}
          checked={checkItem.checked}
          removeCheckItem={removeCheckItem}
        />
      ))}
    </ScrollView>
  </>
);

export default CheckedList;
