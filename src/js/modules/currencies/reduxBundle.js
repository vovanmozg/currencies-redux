export const Actions = {
  ADD: 'currencies/ADD',
  REMOVE: 'currencies/REMOVE',
};

export const add = payload => ({
  type: Actions.ADD,
  payload,
});

export const remove = payload => ({
  type: Actions.REMOVE,
  payload,
});

const currencies = (state = [], action) => {
  switch (action.type) {
    case Actions.ADD:
      return state.concat(action.payload);
    case Actions.REMOVE:

      return state.filter(el => el.name !== action.payload.name);
    default:
      return state;
  }
};

export default currencies;
