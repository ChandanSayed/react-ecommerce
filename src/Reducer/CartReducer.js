const CartReducer = (state, action) => {
  if (action.type === 'ADD_TO_CART') {
    let { id, color, amount, product } = action.payload;

    console.log(action.payload);

    let cartProduct = {
      id: id + color,
      name: product.name,
      color,
      amount,
      image: product.image[0].url,
      price: product.price,
      max: product.stock
    };

    return {
      ...state,
      cart: [...state.cart, cartProduct]
    };
  }
  if (action.type === 'REMOVE_ITEM') {
    let updatedCart = state.cart.filter(curItem => curItem.id !== action.payload);
    return {
      ...state,
      cart: updatedCart
    };
  }
  if (action.type === 'CLEAR_CART') {
    return {
      ...state,
      cart: []
    };
  }
};
export default CartReducer;

// https://stackoverflow.com/questions/63117470/how-to-return-two-values-in-reduce#:~:text=You%20cannot%20return%20two%20values%20in%20reduce%20.