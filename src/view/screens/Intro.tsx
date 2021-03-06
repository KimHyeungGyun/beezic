import React, { useEffect } from 'react';
import styled from '@emotion/native';
import { Animated } from 'react-native';
import UserStore from '../../viewModel/UserStore';
import logo from '../../assets/Beezic_Logo.png';

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;

const Logo = styled.Image`
  width: 350px;
  height: 200px;
  margin-bottom: 220px;
`;

const MainText = styled.Text`
  font-size: 25px;
  font-family: 'Jua-Regular';
  color: #333;
`;
type IntroPropTypes = {
  loadingStateHandler: ()=>void,
};

function Intro({ loadingStateHandler }:IntroPropTypes): JSX.Element {
  const animation = new Animated.Value(1);
  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const animationStyle = {
    opacity: animation,
  };

  const delay = (wait) => new Promise((resolve) => {
    setTimeout(resolve, wait);
  });

  useEffect(() => {
    (async (): void => {
      await delay(1000);
      startAnimation();
      await delay(800);
      await UserStore.checkSignIn();
      loadingStateHandler(false);
    })();
  });
  return (
    <>
      <Animated.View style={[animationStyle]}>
        <Container>
          <Logo source={logo} />
          <MainText>판매도 구매도</MainText>
          <MainText>대신 해드릴게요.</MainText>
        </Container>
      </Animated.View>
    </>
  );
}

export default Intro;
