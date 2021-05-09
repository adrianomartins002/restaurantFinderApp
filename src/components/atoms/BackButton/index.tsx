import React from 'react';
import {GestureResponderEvent, StyleSheetProperties} from 'react-native';
import styled from 'styled-components/native';
import ArrowLeftWhite from '../../../assets/icons/arrow-left-white.svg';
import ArrowLeftDark from '../../../assets/icons/arrow-left-dark.svg';
import {TouchableOpacity} from 'react-native';

type AppProps = {color:string, onPress: (event: GestureResponderEvent) => void };

const BackButton: React.FC<AppProps> = ({onPress, color}) => (
  <ContainerBackButton testID="container-backbutton">
    <TouchableOpacity onPress={onPress} testID="touchable-backbutton">
      {color=="#000"?
      <>
      <ArrowLeftDark />
      </>
      :
      <>
      <ArrowLeftWhite />
      </>
      }
    </TouchableOpacity>
  </ContainerBackButton>
);

const ContainerBackButton = styled.View``;

export default BackButton;
