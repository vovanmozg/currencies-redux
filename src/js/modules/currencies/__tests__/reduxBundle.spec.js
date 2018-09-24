import { Actions, ratesReducer } from '../reduxBundle';
import actionData from './__fixtures__/fetchCurrencySuccessAction';

describe('Currencies reducer', () => {
  it('should return the initial state', () => {
    expect(ratesReducer(undefined, {})).toEqual({});
  });

  describe('handles ADD and', () => {
    it('adds one item', () => {
      expect(
        ratesReducer({}, {
          type: Actions.ADD,
          payload: { name: 'BTC' },
        }),
      ).toEqual({
        BTC: { name: 'BTC' },
      });
    });

    it('does not add same item', () => {
      expect(
        ratesReducer(
          { BTC: { name: 'BTC' } },
          {
            type: Actions.ADD,
            payload: { name: 'BTC' },
          },
        ),
      ).toEqual({
        BTC: { name: 'BTC' },
      });
    });
  });

  describe('handles FETCH_CURRENCY_SUCCESS and', () => {
    it('returns empty with empty state', () => {
      expect(
        ratesReducer(
          { BTC: { name: 'BTC' } },
          actionData,
        ),
      ).toEqual({
        BTC: {
          name: 'BTC',
          rate: 0.000154,
        },
      });
    });

    it('add rates for existing rates', () => {
      expect(
        ratesReducer([], actionData),
      ).toEqual({});
    });
  });
});
