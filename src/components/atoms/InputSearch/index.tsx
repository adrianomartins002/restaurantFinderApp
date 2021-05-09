import React, {useState, useEffect} from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
  Keyboard,
} from 'react-native';

//import styled from 'styled-components/native';

type InputSearchProps={
  input: string,
  setInput: (value:string)=>void,
  search: (value:string)=>void,
}

const InputSearch: React.FC<InputSearchProps> = ({input, setInput, search}) => {

  return (
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
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#bababa',
        width: 300,
        paddingLeft: 20,
      }}
    />
  );
};

export default InputSearch;
