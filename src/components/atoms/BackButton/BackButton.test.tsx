/**
 * @format
 */

import 'react-native';
import React from 'react';
import BackButton from './index';

// Note: test renderer must be required after react-native.
import {fireEvent, render, waitFor} from '@testing-library/react-native';

describe('BackButton-Component-Test', () => {
  it('On button click', async () => {
    const onClick = jest.fn(() => null);
    const {getByTestId, getByText, queryByTestId, toJSON} = render(
      <BackButton onPress={() => onClick()} color="#FFF" />,
    );
    const touchable = getByTestId('touchable-backbutton');
    fireEvent.press(touchable);
    expect(onClick.mock.calls.length).toBe(1);
  });
});
