import React, { useEffect } from 'react';
import useCustomCart from '../../hooks/useCustomCart';
import useCustomLogin from "../../hooks/useCustomLogin";
import CartItemComponent from '../cart/CartItemComponent';

const CartComponent = () => {
    const { isLogin, loginState } = useCustomLogin();

    const { refreshCart, cartItems ,changeCart} = useCustomCart();

    useEffect(() => {
        if (isLogin) {

            refreshCart()
        }

    }, [isLogin])

    return (
        <div className="w-full">
            {isLogin ?
                <div>
                    <div className="flex felx-col">

                        <div className="w-full flex">
                            <div className="m-2 font-extrabold text-2xl w-4/5">
                                {loginState.nickname}'s Cart
                            </div>
                            <div className="bg-orange-600 w-8 h-8 text-center text-white font-bold rounded-full m-1">
                                {cartItems.length}
                            </div>
                        </div>
                    </div>
                    <div>
                        <ul>
                            {cartItems.map(item => <CartItemComponent {...item} key={item.cino} changeCart={changeCart} email={loginState.email} />)}
                        </ul>
                    </div>
                </div>
                :
                <div></div>
            }
        </div>
    );
}

export default CartComponent;