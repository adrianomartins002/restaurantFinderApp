import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Dimensions,
  ActivityIndicator,
  RefreshControl,
  Text,
  StyleSheet,
} from 'react-native';
import BackButton from '../../components/atoms/BackButton';
import InputSearch from '../../components/atoms/InputSearch';
import Title from '../../components/atoms/Title';
import ListEmptyComp from '../../components/molecules/ListEmpty';
import Loading from '../../components/molecules/Loading';
import RestaurantCard from '../../components/molecules/RestaurantCard';
import {RestaurantService} from '../../services/Restaurant.service';
import {Container} from '../Restaurant/styles';

type Restaurant = {
  name: string;
  logo: string;
  id: number;
};

const {height} = Dimensions.get('window');

const SearchRestaurant: React.FC = ({navigation}) => {
  const [page, setPage] = useState(1);
  const [restaurats, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);
  const [stopSearch, setStopSearch] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [input, setInput] = useState('');

  useEffect(() => {
    async function searchRestaurants() {
      setLoading(true);
      const response = await RestaurantService.getRestaurantsByPage(
        page,
        10,
        input,
      );
      if(response.length>0)
        setRestaurants([...restaurats, ...response]);
      else
        setStopSearch(true);

      setLoading(false);
    }
    searchRestaurants();
  }, [page]);

  const onScrollToEnd = () => {
    setPage(page + 1);
  };

  const searchRestaurantsT = async () => {
    const response = await RestaurantService.getRestaurantsByPage(1, 10, input);
    setRestaurants([...response]);
    setStopSearch(false);
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setRestaurants([]);
    setPage(1)
    setRefreshing(false);
  }, []);

  const renderItem = useCallback(({item}) => (
    <RestaurantCard
      onPress={() => navigation.navigate('Restaurant', {id: item.id})}
      descriptionCard={item.name}
      backgroundImageRestaurant={item.logo}
    />
  ),[]);

  return (
    <Container style={styles.container}>
      <FlatList
        data={restaurats}

        refreshControl={
          <RefreshControl
            colors={['#9Bd35A', '#689F38']}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        renderItem={renderItem}
        ListEmptyComponent={<ListEmptyComp loading={loading}/>}
        ListHeaderComponent={
          <HeaderComponent
            onPressBack={() => navigation.goBack()}
            searchRestaurants={searchRestaurantsT}
            input={input}
            setInput={setInput}
          />
        }

        style={styles.flatlistStyle}
        columnWrapperStyle={{
          alignSelf: 'center',
        }}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        onEndReachedThreshold={1}
        onEndReached={() => {
          if(!stopSearch)
            onScrollToEnd();
        }}
        ListFooterComponent={<Loading loading={loading}/>}
      />
    </Container>
  );
};

type HeaderComponentProps ={
  onPressBack:void,
  searchRestaurants: void,
  input: string,
  setInput: void
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({
  onPressBack,
  searchRestaurants,
  input,
  setInput,
}) => {
  return (
    <View
      style={styles.containerHeader}>
      <View style={{flex: 1, justifyContent: 'center', flexDirection: 'row',}}>
        <View style={{flex: 1}}>
          <BackButton color="#000" onPress={onPressBack} />
        </View>
        <View
          style={{
            flex: 5,
            justifyContent: 'center',
            alignItems: 'center',
            paddingRight: 80,
          }}>
          <Title
            description={'Resultados Para'}
            style={{color: '#AAAAAA', fontSize: 14}}
          />
          <Title
            description={'Termo pesquisado'}
            style={{color: '#000', fontSize: 20}}
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <InputSearch
          input={input}
          setInput={setInput}
          search={searchRestaurants}
        />
        <Title
          description={'Restaurantes'}
          style={{
            textAlign: 'left',
            fontSize: 16,
            paddingLeft:54,
            paddingTop: 10,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFF', height: height, alignItems: 'center'},
  flatlistStyle: {
    backgroundColor: '#FFF',
    width: '100%',
  },
  containerHeader: {
    flex: 1,
    width: '100%',
    height: 180,
    justifyContent: 'center',
    flexDirection: 'column',
  }
});

export default SearchRestaurant;
