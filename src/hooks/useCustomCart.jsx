import { useDispatch, useSelector } from 'react-redux';
import { getCartItemsAsync, postChangeCartAsync } from '../slices/cartSlice';

const useCustomCart = () => {
    const dispatch = useDispatch()

    const cartItems = useSelector(state => state.cartSlice)

    const refreshCart = () => {
        dispatch(getCartItemsAsync())
    }


    const changeCart = (param) => {
        dispatch(postChangeCartAsync(param))
    }

    return {cartItems, refreshCart, changeCart}


};

export default useCustomCart;