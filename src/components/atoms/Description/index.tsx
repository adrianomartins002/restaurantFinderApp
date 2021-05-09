import React from 'react';
import styled from 'styled-components/native';
import {TextStyle} from 'react-native';

type AppProps = {description: string; style?: TextStyle};

const Description: React.FC<AppProps> = ({description, style}) => (
  <TitleStyled style={style} testID="descriptionComponent">
    {description ? description : 'Descricao'}
  </TitleStyled>
);

const TitleStyled = styled.Text`
  color: #000;
  font-size: 14px;
  justify-content: flex-start;
  text-align: left;
  font-family:"Poppins-Regular";
`;

export default Description;
