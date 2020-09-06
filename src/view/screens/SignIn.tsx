import React from 'react';
import styled, { css } from '@emotion/native';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import LinkText from '../components/LinkText';
import OAuthIcons from '../components/OAuthIcons';

const View = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.Text`
  font-size: 64px;
  margin-top: 60px;
  margin-bottom: 30px;
  font-family: 'BMDOHYEON';
`;

const emailInputStyle = css`
  margin-bottom: 30px;
`;

const passwordInputStyle = css`
  margin-bottom: 50px;
`;

const buttonStyle = css`
  margin-bottom: 30px;
  background-color: #fc8a3d;
`;

const oauthStyle = css`
  margin-top: 45px;
`;

const SignIn = (): JSX.Element => (
  <View>
    <Header>Welcome!</Header>
    <TextInput
      label="Email"
      placeholder="Enter your email address"
      textInputStyle={emailInputStyle}
    />
    <TextInput
      label="Password"
      placeholder="Enter your password"
      textInputStyle={passwordInputStyle}
      password
    />
    <Button title="Sign In" background={buttonStyle} />
    <LinkText content="Create an account?" />
    <OAuthIcons style={oauthStyle} />
  </View>
);

export default SignIn;
