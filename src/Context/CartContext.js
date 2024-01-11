import { createContext, useContext, useReducer } from 'react';
import CartReducer from '../Reducer/CartReducer';

const CartContext = createContext();

const initialState = {
  cart: [],
  total_item: '',
  total_price: '',
  shipping_fee: 50000
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: 'ADD_TO_CART', payload: { id, color, amount, product } });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
