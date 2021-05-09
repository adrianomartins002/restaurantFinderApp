import React from 'react';
import {TextStyle} from 'react-native';
import styled from 'styled-components/native';

type AppProps = {description: string, style?: TextStyle};

const Title: React.FC<AppProps> = ({description, style})=>(
  <TitleStyled style={style} testID="titleComponent">
    {description? description : "Title"}
  </TitleStyled>
);

const TitleStyled = styled.Text`
color:#000;
font-size: 24px;
justify-content: center;
text-align: center;
width:100%;
font-family:"Poppins-SemiBold";
`;

export default Title;
