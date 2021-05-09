import React, {useState, useEffect} from 'react';
import {
  TextInput,
  View,
} from 'react-native';
import Lupa from '../../../assets/icons/lupa.svg';

type InputSearchProps = {
  input: string;
  setInput: (value: string) => void;
  search: (value: string) => void;
};

const InputSearch: React.FC<InputSearchProps> = ({input, setInput, search}) => {
  return (
    <View
      style={{
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#bababa',
        width: 300,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          flex: 1,
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}>
        <Lupa />
      </View>
      <TextInput
        testID="inputSearchComponent"
        placeholder="Encontre um restaurante"
        value={input}
        onChangeText={inputValue => {
          setInput(inputValue);
        }}
        onSubmitEditing={() => {
          search(input);
        }}
        style={{
          flex: 6,
          paddingLeft: 20,
        }}
      />
    </View>
  );
};

export default InputSearch;
