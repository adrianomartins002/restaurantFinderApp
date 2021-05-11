import React, { useMemo } from 'react';
import {View, ImageBackground, TouchableOpacity, GestureResponderEvent} from 'react-native';
import Title from '../../atoms/Title';

type AppProps = {onPress: (event: GestureResponderEvent) => void, descriptionCard: string, backgroundImageRestaurant: string};

const RestaurantCard: React.FC<AppProps> = ({onPress, descriptionCard="Restaraunt Title", backgroundImageRestaurant}) => {
  return (
    <TouchableOpacity onPress={onPress} testID="restaurantCardComponent">
    <ImageBackground

      style={{
        width: 148,
        height: 160,
        borderRadius: 10,
        margin: 8,
      }}
      imageStyle={{ borderRadius: 10}}
      source={{
        uri:backgroundImageRestaurant? backgroundImageRestaurant :"https://static1.conquistesuavida.com.br/articles/8/10/53/8/@/29015-e-possivel-preparar-diferentes-tipos-de-200x200-2.jpg",
        width: 148,
        height: 160,
        cache:"reload"
      }}>
      <View style={{
        width: 148,
        height: 160,
        alignItems:"flex-end",
        justifyContent:"flex-end",
        paddingBottom:8,
        paddingLeft:8,
        borderRadius: 10,
      }}>
        <Title
          description={descriptionCard}
          style={{color: '#FFF', fontSize: 12, textAlign: "left", fontFamily:"Poppins-Black"}}
        />
      </View>
    </ImageBackground>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
