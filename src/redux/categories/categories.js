const CHECK_STATUS = 'bookstore/categories/CHECK';

const initialState = [];

// eslint-disable-next-line default-param-last
const checkReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Categories is under construction';
    default:
      return state;
  }
};

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

export default checkReducer;
