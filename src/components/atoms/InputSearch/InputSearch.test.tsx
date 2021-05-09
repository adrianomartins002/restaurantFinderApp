/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 import InputSearch from './index';

 // Note: test renderer must be required after react-native.
 import {fireEvent, render, waitFor} from '@testing-library/react-native';

 describe('InputSearch-Component-Test', () => {
   it('When render with valid data and functions', async () => {
    const setInput = jest.fn(() => null);
    const search = jest.fn(() => null);

     const {getByTestId, getByText, queryByTestId, toJSON} = render(
       <InputSearch input="teste de input" setInput={setInput} search={search}/>,
     );
      const input = getByTestId('inputSearchComponent')
      fireEvent.changeText(input, 'teste de input')
      fireEvent(input, 'submitEditing')

      expect(getByTestId('inputSearchComponent').props.value).toBe('teste de input');
   });

 });
