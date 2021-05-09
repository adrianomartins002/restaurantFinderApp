/**
 * @format
 */

import 'react-native';
import React from 'react';
import RestaurantCard from './index';

import {render, fireEvent} from '@testing-library/react-native';

describe('Title-Component-Test', () => {
  it('When render with all params valid', async () => {
    const onClick = jest.fn(() => null);
    const {getByTestId, getByText, queryByTestId, toJSON} = render(
      <RestaurantCard
        backgroundImageRestaurant="https://testeimagem.com.br/123123"
        descriptionCard="Restaurant 1"
        onPress={onClick}
      />,
    );
    const restaurantCardComp = getByTestId('restaurantCardComponent');

    expect(restaurantCardComp).not.toBe(null);
  });

  it('When press restaurant card', () => {
    const onClick = jest.fn(() => null);
    const {getByTestId, getByText, queryByTestId, toJSON} = render(
      <RestaurantCard
        backgroundImageRestaurant="https://testeimagem.com.br/123123"
        descriptionCard="Restaurant 1"
        onPress={onClick}
      />,
    );
    const restaurantCardComp = getByTestId('restaurantCardComponent');
    fireEvent.press(restaurantCardComp);
    expect(onClick.mock.calls.length).toBe(1);
  });
});
