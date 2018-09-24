export default {
  type: 'currencies/FETCH_CURRENCY_SUCCESS',
  payload: {
    data: {
      success: true,
      terms: 'https://currencylayer.com/terms',
      privacy: 'https://currencylayer.com/privacy',
      timestamp: 1537496345,
      source: 'USD',
      quotes: {
        USDAED: 3.673199,
        USDAFN: 75.518498,
        USDALL: 107.425003,
        USDAMD: 479.944981,
        USDANG: 1.83635,
        USDBTC: 0.000154,
      },
    },
    status: 200,
    statusText: 'OK',
    headers: {
      'last-modified': 'Fri, 21 Sep 2018 02:19:05 GMT',
      'content-type': 'application/json; Charset=UTF-8',
    },
    config: {
      transformRequest: {},
      transformResponse: {},
      timeout: 0,
      xsrfCookieName: 'XSRF-TOKEN',
      xsrfHeaderName: 'X-XSRF-TOKEN',
      maxContentLength: -1,
      headers: {
        Accept: 'application/json, text/plain, */*',
      },
      method: 'get',
      baseURL: 'http://apilayer.net/api',
      responseType: 'json',
      url: 'http://apilayer.net/api/live?access_key=7b45ba8509e0196d0da5d964797df82d',
      reduxSourceAction: {
        type: 'currencies/FETCH_CURRENCY',
        payload: {
          request: {
            url: 'http://apilayer.net/api/live?access_key=7b45ba8509e0196d0da5d964797df82d',
          },
        },
      },
    },
    request: {},
  },
  meta: {
    previousAction: {
      type: 'currencies/FETCH_CURRENCY',
      payload: {
        request: {
          url: 'http://apilayer.net/api/live?access_key=7b45ba8509e0196d0da5d964797df82d',
        },
      },
    },
  },
};
