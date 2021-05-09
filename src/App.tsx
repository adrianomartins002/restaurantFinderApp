import React from 'react';
import {StatusBar, View} from 'react-native';
import 'react-native-gesture-handler';
import Routes from './routes';
import {NavigationContainer} from '@react-navigation/native';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#CCC" />
      <View style={{flex: 1, backgroundColor: '#312e38'}}>
        <Routes />
      </View>
    </NavigationContainer>
  );
};

export default App;
