/**
 * @format
 */

import 'react-native';
import React from 'react';
import Description from './index';

import {render } from '@testing-library/react-native';

describe('Description-Component-Test', () => {
  it('When render with all params valid', async () => {
    const {getByTestId, getByText, queryByTestId, toJSON} = render(
      <Description description="Titulo de teste" />,
    );

    const descriptionComponent = getByTestId('descriptionComponent');

    expect(descriptionComponent).not.toBe(null);
  });

  it('When try render with props invalid', ()=>{
    const {getByTestId} = render(
      <Description description={null} />,
    );

    expect(getByTestId('descriptionComponent').props.children).toBe(
      'Descricao'
    )
  })
});
