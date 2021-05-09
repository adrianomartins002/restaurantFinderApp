/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 import Title from './index';

 import {render } from '@testing-library/react-native';

 describe('Title-Component-Test', () => {
   it('When render with all params valid', async () => {
     const {getByTestId, getByText, queryByTestId, toJSON} = render(
       <Title description="Restaurant Mamma Mia"  />,
     );

     const titleComponent = getByTestId('titleComponent');

     expect(titleComponent).not.toBe(null);
   });

   it('When try render with props invalid', ()=>{
     const {getByTestId} = render(
       <Title description={null} />,
     );

     expect(getByTestId('titleComponent').props.children).toBe(
       'Title'
     )
   })
 });
