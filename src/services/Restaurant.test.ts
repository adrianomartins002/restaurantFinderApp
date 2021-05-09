import axios from 'axios';

import {RestaurantService} from './Restaurant.service';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;


describe('RestaurantService', () => {
  it('get restaurant details', async () => {
    const dataRestaurant = {
      data:{
        iconRestaurant: "https://icon-teste.com/123",
        backgroundImage: "https://image-background.com/123",
        restaurantName: "Mamma mia",
        description: "Restaurante da casa grande",
        contact: "(98) 9 99999999 e site mamamia.com.br",
        price: "De 40 a 60 reais",
        openingHours: "Entre terça e quinta feira das 9:00 as 22:00",
        paymentMethods: "Dinheiro e cartão de crédito e debito"
      }
    };
    mockedAxios.get.mockImplementationOnce(() => Promise.resolve(dataRestaurant));
    expect(RestaurantService.getRestaurantDetails(1)).resolves.toMatchObject(dataRestaurant);

  });

  it('get restaurant details when have a exception', async () => {
    mockedAxios.get.mockImplementationOnce(() => Promise.reject(null));
    expect(RestaurantService.getRestaurantDetails(1)).rejects.toBe(null);
  });

  it('get restaurant list', async () => {
    const dataRestaurant = {
      data:[{
        iconRestaurant: "https://icon-teste.com/123",
        backgroundImage: "https://image-background.com/123",
        restaurantName: "Mamma mia",
        description: "Restaurante da casa grande",
        contact: "(98) 9 99999999 e site mamamia.com.br",
        price: "De 40 a 60 reais",
        openingHours: "Entre terça e quinta feira das 9:00 as 22:00",
        paymentMethods: "Dinheiro e cartão de crédito e debito"
      }]
    };
    mockedAxios.get.mockImplementationOnce(() => Promise.resolve(dataRestaurant));
    expect(RestaurantService.getRestaurantsByPage(1, 10)).resolves.toMatchObject(dataRestaurant);

  });

  it('get restaurant list when have a exception', async () => {
    mockedAxios.get.mockImplementationOnce(() => Promise.reject([]));
    expect(RestaurantService.getRestaurantsByPage(1, 10)).rejects.toBe([]);
  });
});
