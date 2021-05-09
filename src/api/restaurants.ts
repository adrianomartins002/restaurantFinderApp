/**
 *
 *
 */
type Props={
  page:number,
  limit: number,
  search?: string
}

export function getRestaurants({page, limit, search}:Props) {
  return {
    url: `https://605d074f9386d200171ba209.mockapi.io/api/v1/restaurants`,
    metodo: 'get',
    params: {
      page,
      limit,
      search,
    }
  };
}

export function getRestaurantDetail(id:number){
  return {
    url: `https://605d074f9386d200171ba209.mockapi.io/api/v1/restaurants/${id}`,
    metodo: 'get',
  };
}
