/**
 * @format
 */

 import 'react-native';
 import React from 'react';

 import {render} from '@testing-library/react-native';
import Loading from '.';

 describe('Loading-Component-Test', () => {
   it('When render with all params valid', async () => {
     const {getByTestId, getByText, queryByTestId, toJSON} = render( <Loading loading={true}/>,
     );

     const loadingComponent = getByTestId('loadingComponent');

     expect(loadingComponent).not.toBe(null);
   });

 });
