import { COINBASE_API_KEY } from '@env'; // eslint-disable-line

export const apikey = COINBASE_API_KEY;
export const baseUrl = 'https://rest.coinapi.io/v1';
export const buildUrl = currency => `/exchangerate/${currency}/RUB?apikey=${apikey}`;

export const decodeRates = (data) => {
  const name = data.asset_id_base;
  const { rate } = data;

  return { name, rate };
};
