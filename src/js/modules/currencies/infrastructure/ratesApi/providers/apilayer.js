import { APILAYER_API_KEY } from '@env'; // eslint-disable-line

const apikey = APILAYER_API_KEY;
const baseUrl = 'http://apilayer.net/api';

const getNameFromPair = pair => pair.replace(/^USD/, '');

const buildUrl = () => `${baseUrl}/live?access_key=${apikey}`;

const decodeRates = (data) => {
  if (data.success !== true) {
    throw Error('Invalid api response');
  }

  return Object.entries(data.quotes).reduce(
    (memo, [pairName, rate]) => {
      const name = getNameFromPair(pairName);
      const item = {
        [name]: { name, rate },
      };
      return { ...memo, ...item };
    },
    {},
  );
};

const buildNamesUrl = () => buildUrl();

const decodeNames = (data) => {
  if (data.success !== true) {
    throw Error('Invalid api response');
  }

  return Object.entries(data.quotes).map(
    ([pairName]) => getNameFromPair(pairName),
  );
};


export default {
  baseUrl,
  buildNamesUrl,
  buildUrl,
  decodeNames,
  decodeRates,
};
