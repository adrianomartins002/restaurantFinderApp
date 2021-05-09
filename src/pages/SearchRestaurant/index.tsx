import React, {useEffect, useState} from 'react';
import {View, FlatList, Dimensions, ActivityIndicator} from 'react-native';
import BackButton from '../../components/atoms/BackButton';
import InputSearch from '../../components/atoms/InputSearch';
import Title from '../../components/atoms/Title';
import RestaurantCard from '../../components/molecules/RestaurantCard';
import {RestaurantService} from '../../services/Restaurant.service';
import {Container} from '../Restaurant/styles';

type Restaurant = {
  name: string;
  logo: string;
  id: number;
};

const SearchRestaurant: React.FC = ({navigation}) => {
  const [page, setPage] = useState(1);
  const [restaurats, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState('');

  useEffect(() => {
    async function searchRestaurants() {
      setLoading(true);
      const response = await RestaurantService.getRestaurantsByPage(
        page,
        10,
        input,
      );

      setRestaurants([...restaurats, ...response]);
      setLoading(false);
    }
    searchRestaurants();
  }, [page]);

  const onScrollToEnd = () => {
    setPage(page + 1);
  };

  const searchRestaurants = async () => {
    const response = await RestaurantService.getRestaurantsByPage(1, 10, input);
    setRestaurants([...response]);
  };

  const {height} = Dimensions.get('window');

  return (
    <Container style={{flex: 1, backgroundColor: '#FFF', height: height}}>
      <FlatList
        data={restaurats}
        renderItem={({item}) => (
          <RestaurantCard
            onPress={() => navigation.navigate('Restaurant', {id: item.id})}
            descriptionCard={item.name}
            backgroundImageRestaurant={item.logo}
          />
        )}
        ListEmptyComponent={() => {
          return (
            <View
              style={{
                justifyContent: 'center',
                alignItems:"center"
              }}>
              {loading ? (
                <ActivityIndicator size="large" color="#ED1C24" />
              ) : (
                <>
                <Title
                  description="Ops, não foi possível recuperar os restaurantes"
                  style={{
                    fontSize:14
                  }}
                />
                <Title description="Tente novamente mais tarde"
                style={{
                  fontSize:14
                }}
                />
                </>
              )}
            </View>
          );
        }}
        ListHeaderComponent={
          <HeaderComponent
            onPressBack={() => navigation.goBack()}
            searchRestaurants={searchRestaurants}
            input={input}
            setInput={setInput}
          />
        }
        style={{
          backgroundColor: '#FFF',
          alignSelf: 'center',
        }}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        onEndReachedThreshold={1}
        onEndReached={() => {
          console.log('executou sapoha');
          onScrollToEnd();
        }}
      />
    </Container>
  );
};

const HeaderComponent: React.FC = ({
  onPressBack,
  searchRestaurants,
  input,
  setInput,
}) => {
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        height: 180,
        justifyContent: 'center',
        flexDirection: 'column',
      }}>
      <View style={{flex: 1, justifyContent: 'center', flexDirection: 'row'}}>
        <View style={{flex: 2, justifyContent: 'center'}}>
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
            style={{color: '#000', fontSize: 20, fontWeight: 'bold'}}
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
            fontWeight: 'bold',
            paddingLeft: 4,
            paddingTop: 10,
          }}
        />
      </View>
    </View>
  );
};

export default SearchRestaurant;
