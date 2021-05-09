import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Dimensions,
  ImageBackground,
  Text,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Title from '../../components/atoms/Title';
import RestaurantCard from '../../components/molecules/RestaurantCard';
import {RestaurantService} from '../../services/Restaurant.service';
import {Container} from '../Restaurant/styles';
import {useNavigation} from '@react-navigation/native';
import Lupa from '../../assets/icons/lupa.svg';

type Restaurant = {
  name: string;
  logo: string;
  id: number;
};



const Home: React.FC = () => {
  const [page, setPage] = useState(1);
  const [restaurats, setRestaurants] = useState<Restaurant[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function searchRestaurants() {
      setLoading(true);
      const response = await RestaurantService.getRestaurantsByPage(page, 10);

      setRestaurants([...restaurats, ...response]);
      setLoading(false);
    }
    searchRestaurants();
  }, [page]);

  const onScrollToEnd = () => {
    setPage(page + 1);
  };

  const {height} = Dimensions.get('window');

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setRestaurants([]);
    setPage(1);
    setRefreshing(false);
  }, []);

  return (
    <Container
      style={{
        flex: 1,
        backgroundColor: '#FFF',
        height: height,
        alignItems: 'center',
      }}>
      <FlatList
        refreshControl={
          <RefreshControl
            colors={['#9Bd35A', '#689F38']}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        data={restaurats}
        renderItem={({item}) => (
          <RestaurantCard
            onPress={() => navigation.navigate('Restaurant', {id: item.id})}
            descriptionCard={item.name}
            backgroundImageRestaurant={item.logo}
          />
        )}
        ListHeaderComponent={
          <HeaderComponent
            onSearchPress={() => navigation.navigate('SearchRestaurant')}
          />
        }
        style={{
          backgroundColor: '#FFF',
          width: '100%',
        }}
        columnWrapperStyle={{
          alignSelf: 'center',
        }}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        onEndReachedThreshold={1}
        onEndReached={() => {
          onScrollToEnd();
        }}
        ListFooterComponent={
          loading ? (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent:"center"
              }}>
              <Text style={{color: '#808080', fontSize:18}}>Carregando</Text>
              <ActivityIndicator size="small" color="#ED1C24" />
            </View>
          ) : null
        }
        ListEmptyComponent={() => {
          return (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {loading ? (
                <ActivityIndicator size="large" color="#ED1C24" />
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
        }}
      />
    </Container>
  );
};

type HeaderProps = {onSearchPress: () => void};

const HeaderComponent: React.FC<HeaderProps> = ({onSearchPress}) => {
  return (
    <View style={{display: 'flex', flex: 1, width: '100%', height: 330}}>
      <ImageBackground
        style={{
          width: '100%',
          height: 240,
          flexDirection: 'row',
        }}
        source={require('../../assets/img/header.png')}>
        <View
          style={{
            flex: 5,
          }}>
          <View style={{flex: 1, width: '100%', paddingTop: 40}}>
            <Title
              description={'Descubra novos sabores'}
              style={{fontFamily:"Poppins-Black"}}
            />
          </View>
        </View>
      </ImageBackground>
      <View
        style={{
          width: '100%',
          height: 100,
          top: -30,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          justifyContent:"center",
          alignItems:"center",
          backgroundColor:"#FFF",
          paddingTop: 40,
        }}>
        <TouchableOpacity
          onPress={() => {
            onSearchPress();
          }}>
          <View
            style={{
              width: 300,
              height: 50,
              borderRadius: 8,
              borderColor: '#CCC',
              borderWidth: 1,
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'space-between',
              display: 'flex',
              flexDirection: 'row',
            }}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
              }}>
              <Lupa />
            </View>
            <Text
              style={{
                color: '#666666',
                fontSize: 16,
                textAlign: 'justify',
                justifyContent: 'center',
                flex: 5,
              }}>
              Encontre um Restaurante
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
