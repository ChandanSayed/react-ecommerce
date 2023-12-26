import axios from 'axios';
import { createContext, useContext, useEffect, useReducer } from 'react';
import ProductReducer from '../Reducer/ProductReducer';

const AppContext = createContext();

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {}
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const getProducts = async () => {
    dispatch({ type: 'SET_LOADING' });
    try {
      const res = await axios.get('https://api.pujakaitem.com/api/products');
      const products = await res.data;
      dispatch({ type: 'SET_API_DATA', payload: products });
    } catch (error) {
      dispatch({ type: 'API_ERROR' });
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>;
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useProductContext };
