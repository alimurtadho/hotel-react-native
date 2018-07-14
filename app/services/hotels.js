import constants from '../config/constants';

export default {
  getHotels: (city) => fetch(`${constants.API_URL}/hotels?city=${city||''}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    },
  }),
  getHotel: (id) => fetch(`${constants.API_URL}/hotels/${id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    },
  })
}