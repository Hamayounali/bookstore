const CHECK_STATUS = 'bookstore/categories/CHECK';

const initialState = [];

const checkReducer = (action, state = initialState) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

export default checkReducer;
