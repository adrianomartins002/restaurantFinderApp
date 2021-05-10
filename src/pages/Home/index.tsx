import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Dimensions,
  ImageBackground,
  Text,
  ActivityIndicator,
  RefreshControl,
  StyleSheet,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Title from '../../components/atoms/Title';
import RestaurantCard from '../../components/molecules/RestaurantCard';
import {RestaurantService} from '../../services/Restaurant.service';
import {Container} from '../Restaurant/styles';
import {useNavigation} from '@react-navigation/native';
import Lupa from '../../assets/icons/lupa.svg';
import ListEmptyComp from '../../components/molecules/ListEmpty';
import Loading from '../../components/molecules/Loading';

type Restaurant = {
  name: string;
  logo: string;
  id: number;
};

const {height} = Dimensions.get('window');

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

  /**
   * Responsável por fazer carregar mais páginas à medida que chega ao final do scroll
   * trabalha juntamente com o useEffect acima
   */
  const onScrollToEnd = () => {
    setPage(page + 1);
  };



  /**
   * Função responsável por carregar novamente os dados quando o
   * usuario arrasta para baixo a lista
   */
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setRestaurants([]);
    setPage(1);
    setRefreshing(false);
  }, []);

  return (
    <Container
      style={styles.container}>
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
        style={styles.flatList}
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
         <Loading loading={loading}/>
        }
        ListEmptyComponent={<ListEmptyComp loading={loading}/>}
      />
    </Container>
  );
};

type HeaderProps = {onSearchPress: () => void};

const HeaderComponent: React.FC<HeaderProps> = ({onSearchPress}) => {
  return (
    <View style={styles.containerHeader}>
      <ImageBackground
        style={styles.imageBackgroundHeader}
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
        style={styles.containerInputButton}>
        <TouchableOpacity
          onPress={() => {
            onSearchPress();
          }}>
          <View
            style={styles.containerLupa}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
              }}>
              <Lupa />
            </View>
            <Text
              style={styles.containerTextInput}>
              Encontre um Restaurante
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#FFF',
    height: height,
    alignItems: 'center',
  },
  flatList:{
    backgroundColor: '#FFF',
    width: '100%',
  },
  containerHeader:{display: 'flex', flex: 1, width: '100%', height: 330},
  imageBackgroundHeader: {
    width: '100%',
    height: 240,
    flexDirection: 'row',
  },
  containerInputButton:{
    width: '100%',
    height: 100,
    top: -30,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#FFF",
    paddingTop: 40,
  },
  containerLupa:{
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
  },
  containerTextInput:{
    color: '#666666',
    fontSize: 16,
    textAlign: 'justify',
    justifyContent: 'center',
    flex: 5,
  }
})

export default Home;
