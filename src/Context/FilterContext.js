import { createContext, useContext, useReducer, useEffect } from 'react';
import { useProductContext } from './ProductContext';
import FilterReducer from '../Reducer/FilterReducer';

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(FilterReducer, initialState);

  useEffect(() => {
    dispatch({ type: 'LOAD_FILTER_PRODUCTS', payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{
        ...state
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
