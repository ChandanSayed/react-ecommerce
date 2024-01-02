const FilterReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_FILTER_PRODUCTS':
      let priceArr = action.payload.map(curElem => curElem.price);

      let maxPrice = Math.max(...priceArr);

      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: { ...state.filters, maxPrice, price: maxPrice }
      };
    case 'SET_GRID_VIEW':
      return {
        ...state,
        grid_view: true
      };

    case 'SET_LIST_VIEW':
      return {
        ...state,
        grid_view: false
      };
    default:
      return state;
  }
};

export default FilterReducer;
