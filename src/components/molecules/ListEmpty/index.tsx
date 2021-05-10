import React from 'react';
import {StyleSheet, View} from 'react-native';
import Title from '../../atoms/Title';

type ListEmptyProps = {loading: boolean};

const ListEmptyComp:React.FC<ListEmptyProps> =({loading}) => {
  return (
    <View
      testID="listEmptyComponent"
      style={styles.listEmpty}>
      {loading ? (
        null
      ) : (
        <>
          <Title
            description="Ops, não foi possível recuperar os restaurantes"
            style={{
              fontSize: 14,
            }}
          />
          <Title
            description="Tente novamente mais tarde"
            style={{
              fontSize: 14,
            }}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  listEmpty:{
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default ListEmptyComp;
