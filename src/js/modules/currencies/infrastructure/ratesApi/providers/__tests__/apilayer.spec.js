import apilayer from '../apilayer';
import actionData from '../../../../__tests__/__fixtures__/fetchCurrencySuccessAction';

describe('apilayer', () => {
  it('decodeRates returns rates', () => {
    const rates = apilayer.decodeRates(actionData.payload.data);
    expect(rates.AFN).toEqual({ name: 'AFN', rate: 75.518498 });
  });
});
