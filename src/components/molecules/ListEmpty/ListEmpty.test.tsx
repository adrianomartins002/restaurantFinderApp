/**
 * @format
 */

 import 'react-native';
 import React from 'react';

 import {render} from '@testing-library/react-native';
 import ListEmpty from './index';

 describe('ListEmpty-Component-Test', () => {
   it('When render with all params valid', async () => {
     const {getByTestId, getByText, queryByTestId, toJSON} = render( <ListEmpty loading={true}/>,
     );

     const descriptionComponent = getByTestId('listEmptyComponent');

     expect(descriptionComponent).not.toBe(null);
   });

 });
