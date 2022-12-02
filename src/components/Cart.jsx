import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCartItems,
  selectCartState,
  selectCartTotalAmount,
  selectCartTotalQuantity,
  setClearCartItem,
  setCloseCart,
  setGetTotal,
} from '../app/CartSlice';
import CartCount from './cart/CartCount';
import CartEmpty from './cart/CartEmpty';
import CartItem from './cart/CartItem';

const Cart = () => {
  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState);
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectCartTotalAmount);
  const totalQuantity = useSelector(selectCartTotalQuantity);

  useEffect(() => {
    dispatch(setGetTotal());
  }, [cartItems, dispatch]);

  const onCartToggle = () => {
    dispatch(
      setCloseCart({
        cartState: false,
      })
    );
  };

  const onClearCartItems = () => {
    dispatch(setClearCartItem());
  };

  return (
    <>
      <div
        className={`fixed top-0 right-0 left-0 bottom-0 blur-effect-theme w-full h-screen opacity-100 z-[250]
                   ${
                     ifCartState
                       ? 'opacity-100 visible translate-x-0'
                       : 'opacity-0 invisible translate-x-8'
                   } `}
      >
        <div
          className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0`}
        >
          <CartCount
            totalQuantity={totalQuantity}
            onCartToggle={onCartToggle}
            onClearCartItems={onClearCartItems}
          />
          {cartItems?.length === 0 ? (
            <CartEmpty onCartToggle={onCartToggle} />
          ) : (
            <div>
              <div
                className="flex flex-col items-start justify-start gap-y-4 
              lg:gap-y-2 overflow-y-scroll h-[81vh] scroll-smooth  py-3 "
              >
                {cartItems?.map((item, i) => (
                  <CartItem key={i} item={item} />
                ))}
              </div>

              <div className="fixed bottom-0 bg-white w-full px-5 py-2 pb-5 grid items-center">
                <div className="flex items-center justify-between">
                  <h1 className="text-base font-semibold ">Sub total:</h1>
                  <h1 className="text-sm rounded bg-theme-cart text-slate-100 font-normal px-2 py-0.5 items-center justify-center ">
                    $ {totalAmount}
                  </h1>
                </div>
                <div className="grid items-center gap-2 ">
                  <p className="text-sm font-medium text-center">
                    Taxes and Shipping calculated include.
                  </p>
                  <button
                    type="button"
                    className="button-theme bg-theme-cart text-white"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
