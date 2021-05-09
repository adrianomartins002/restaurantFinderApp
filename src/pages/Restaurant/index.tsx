import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Image,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import BackButton from '../../components/atoms/BackButton';
import Description from '../../components/atoms/Description';
import Title from '../../components/atoms/Title';
import {RestaurantService} from '../../services/Restaurant.service';
import {Container} from './styles';
import {useNavigation} from '@react-navigation/native';

type DataRestaurant = {
  iconRestaurant: string;
  backgroundImage: string;
  restaurantName: string;
  description: string;
  contact: string;
  price: string;
  openingHours: string;
  paymentMethods: string;
};

const Restaurant: React.FC = ({route}) => {
  const [
    restaurantDetail,
    setRestaurantDetail,
  ] = useState<DataRestaurant | null>(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    async function searchRestaurantDetail() {
      setLoading(true);
      const response = await RestaurantService.getRestaurantDetails(
        route.params.id,
      );

      if (!response) {
        setRestaurantDetail(null);
      } else {
        const dataRestaurant = {
          iconRestaurant: response.logo,
          backgroundImage: response.image,
          restaurantName: response.name,
          description: response.description,
          contact: `${response.telephone} ${response.website}`,
          price: response.price_range,
          openingHours: response.opening_hours,
          paymentMethods: response.payment_methods,
        };
        setRestaurantDetail(dataRestaurant);
      }
      setLoading(false);
    }
    searchRestaurantDetail();
  }, []);

  return (
    <View style={{display: 'flex', flex: 1, backgroundColor: '#FFF'}}>
      {loading ? (
        <ActivityIndicator size="large" color="#ED1C24" />
      ) : !restaurantDetail ? (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            flexDirection:"row"
          }}>
          <View
            style={{
              flex:1,
              position: 'absolute',
              alignSelf: 'baseline',
              paddingTop: 50,
              paddingLeft: 30,
            }}>
            <BackButton onPress={() => navigation.goBack()} color="#000" />
          </View>
          <View style={{
            flex:4,
            paddingHorizontal:40
          }}>
            <Title description="Ops!" />
            <Title description="Não foi possível recuperar os dados do restaurante" />
          </View>
        </View>
      ) : (
        <ScrollView>
          <ImageBackground
            style={{
              width: '100%',
              height: 160,
              backgroundColor: '#000',
              opacity: 0.6,
              flexDirection: 'row',
            }}
            source={{
              uri: restaurantDetail.backgroundImage,
            }}>
            <View
              style={{
                flex: 1,
                paddingTop: 50,
                paddingLeft: 30,
              }}>
              <BackButton onPress={() => navigation.goBack()} color="#FFF" />
            </View>
            <View
              style={{
                flex: 5,
              }}></View>
          </ImageBackground>
          <Container
            style={{
              flex: 4,
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              top: -30,
            }}>
            <View
              style={{
                flex: 1,
                top: -80,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: 60,
                }}>
                <Image
                  style={{width: 120, height: 120, borderRadius: 60}}
                  source={{
                    uri: restaurantDetail.iconRestaurant,
                  }}
                />
              </View>
            </View>
            <View style={{flex: 4, top: -80, paddingHorizontal: 30}}>
              <View style={{flex: 1, width: '100%', paddingTop: 40}}>
                <Title
                  description={restaurantDetail.restaurantName}
                  style={{fontWeight: 'bold'}}
                />
              </View>
              <View style={{flex: 5}}>
                <View style={{marginBottom: 30}}>
                  <Title
                    description={'Descrição'}
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      textAlign: 'left',
                    }}
                  />
                  <Description description={restaurantDetail.description} />
                </View>
                <View style={{marginBottom: 30}}>
                  <Title
                    description={'Contato'}
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      textAlign: 'left',
                    }}
                  />
                  <Description description={restaurantDetail.contact} />
                </View>
                <View style={{marginBottom: 30, borderBottomColor: '#ccc'}}>
                  <Title
                    description={'Faixa de preço'}
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      textAlign: 'left',
                    }}
                  />
                  <Description description={restaurantDetail.price} />
                </View>
                <View
                  style={{
                    backgroundColor: '#CCC',
                    width: '100%',
                    borderBottomWidth: 1,
                    borderBottomColor: '#ccc',
                    borderStyle: 'solid',
                  }}
                />
                <View
                  style={{width: '100%', backgroundColor: '#CCC', height: 2}}
                />
                <View style={{marginBottom: 30}}>
                  <Title
                    description={'Horários de Funcionamento'}
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      textAlign: 'left',
                    }}
                  />
                  <Description description={restaurantDetail.openingHours} />
                </View>
                <View style={{marginBottom: 30}}>
                  <Title
                    description={'Formas de pagamento'}
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      textAlign: 'left',
                    }}
                  />
                  <Description description={restaurantDetail.paymentMethods} />
                </View>
              </View>
            </View>
          </Container>
        </ScrollView>
      )}
    </View>
  );
};

export default Restaurant;
