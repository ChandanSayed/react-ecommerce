import { createContext, useContext, useEffect, useReducer } from 'react';
import CartReducer from '../Reducer/CartReducer';

const CartContext = createContext();
const getCartDate = () => {
  const isAvailable = localStorage.getItem('cart');
  if (isAvailable == []) {
    return [];
  } else {
    return JSON.parse(localStorage.getItem('cart'));
  }
};
const initialState = {
  cart: getCartDate(),
  total_item: '',
  total_price: '',
  shipping_fee: 50000
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: 'ADD_TO_CART', payload: { id, color, amount, product } });
  };
  const removeItem = id => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  useEffect(() => localStorage.setItem('cart', JSON.stringify(state.cart)), [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart
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
