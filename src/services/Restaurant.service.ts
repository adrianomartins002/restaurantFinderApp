import * as api from '../../src/api/restaurants';
import axios from 'axios';

type Restaurant = {
  name: string;
  logo: string;
  id: number;
};

export const RestaurantService = {
  async getRestaurantsByPage(
    page: number,
    limit: number,
    search?: string,
  ): Promise<Restaurant[]> {
    const paramsRequest = api.getRestaurants({page, limit, search});

    try {
      const {data} = await axios.get(paramsRequest.url, {
        params: {
          page: paramsRequest.params.page,
          limit: paramsRequest.params.limit,
          search: search,
        },
      });
      return data.data;
    } catch (error) {
      return [];
    }
  },

  async getRestaurantDetails(id: number) {

    const paramsRequest = api.getRestaurantDetail(id);
    try{
      const {data} = await axios.get(paramsRequest.url);
      return data.data
    }catch(error){
      return null;
    }
  },
};
