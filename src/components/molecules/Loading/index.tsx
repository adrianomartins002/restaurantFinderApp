import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

type LoadingProps={
  loading: boolean
}

const Loading: React.FC<LoadingProps> = ({loading}) => {
  return (
    <>
      {loading ? (
        <View testID="loadingComponent" style={styles.footer}>
          <Text style={styles.footerText}>Carregando</Text>
          <ActivityIndicator size="small" color="#ED1C24" />
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  footer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"center"
  },
  footerText:{color: '#808080', fontSize:18},
});

export default Loading;
