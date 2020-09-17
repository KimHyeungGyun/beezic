import React from 'react';
import styled from '@emotion/native';
import { StackNavigationProp } from '@react-navigation/stack';
import CloseMenu from '../components/Main_MenuBar/CloseMenu';
import LinkText from '../components/LinkText';
import { UserStore, DetailInfoStore } from '../../viewModel';

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;

const MarginBottom = styled.View`
  margin-bottom: 50px;
`;
type MainMenuPropTypes={
  navigation: StackNavigationProp
};
function MainMenu({ navigation }:MainMenuPropTypes): JSX.Element {
  const navigationMyInfo = () => {
    navigation.navigate('MyInfoStackNavigator', { screen: 'MyInfo' });
    DetailInfoStore.getUserTransactionList(UserStore.user.uid);
  };
  return (
    <>
      <CloseMenu closeButtonHandler={() => navigation.goBack()} />
      <Container>
        <MarginBottom>
          <LinkText
            onPress={() => navigation.navigate('MainStackNavigator', { screen: 'Main' })}
            content="Home"
            size={20}
          />
        </MarginBottom>
        <MarginBottom>
          <LinkText
            onPress={navigationMyInfo}
            content="My Page"
            size={20}
          />
        </MarginBottom>
        <MarginBottom>
          <LinkText content="Sample 1" size={20} />
        </MarginBottom>
        <MarginBottom>
          <LinkText content="Sample 2" size={20} />
        </MarginBottom>
        <MarginBottom>
          <LinkText content="Sample 3" size={20} />
        </MarginBottom>
      </Container>
    </>
  );
}

export default MainMenu;
