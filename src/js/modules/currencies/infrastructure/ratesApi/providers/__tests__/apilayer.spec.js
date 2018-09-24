import apilayer from '../apilayer';
import actionData from '../../../../__tests__/__fixtures__/fetchCurrencySuccessAction';

describe('apilayer', () => {
  it('decodeRates returns rates', () => {
    const rates = apilayer.decodeRates(actionData.payload.data);
    expect(rates.AFN).toEqual({ name: 'AFN', rate: 75.518498 });
  });

  it('decodeNames returns list of names', () => {
    const names = apilayer.decodeNames(actionData.payload.data);
    expect(names).toEqual(['AED', 'AFN', 'ALL', 'AMD', 'ANG', 'BTC']);
  });
});
