export const Actions = {
  ADD: 'currencies/ADD',
};

export const add = payload => ({
  type: Actions.ADD,
  payload,
});

const currencies = (state = [], action) => {
  switch (action.type) {
    case Actions.ADD:
      return state.concat(action.payload);
    default:
      return state;
  }
};

export default currencies;
