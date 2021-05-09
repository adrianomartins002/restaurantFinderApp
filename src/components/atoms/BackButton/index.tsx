import React from 'react';
import {GestureResponderEvent, StyleSheetProperties} from 'react-native';
import styled from 'styled-components/native';
import ArrowLeftWhite from '../../../assets/icons/arrow-left-white.svg';
import ArrowLeftDark from '../../../assets/icons/arrow-left-dark.svg';
import {TouchableOpacity} from 'react-native';

type AppProps = {
  color: string;
  onPress: (event: GestureResponderEvent) => void;
};

const BackButton: React.FC<AppProps> = ({onPress, color}) => (
  <TouchableOpacity onPress={onPress} testID="touchable-backbutton">
    <ContainerBackButton
      testID="container-backbutton"
      style={{
        width:"100%",
        height:"100%",
        justifyContent:"center",
        alignItems:"center"
      }}>
      {color == '#000' ? (
        <>
          <ArrowLeftDark />
        </>
      ) : (
        <>
          <ArrowLeftWhite />
        </>
      )}
    </ContainerBackButton>
  </TouchableOpacity>
);

const ContainerBackButton = styled.View``;

export default BackButton;
