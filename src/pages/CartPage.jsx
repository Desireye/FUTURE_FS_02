import { BrushCleaning, Minus, Plus, Trash } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { removeFromCart, updateQuantity, clearCart } from '../features/cart/cartSlice';
import { useEffect } from 'react';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 100);
    return () => clearTimeout(timeout);
  }, []);

  if(cartItems.length === 0 || !cartItems) {
    return <div className='container'>
      <div className='text-center'>
        <h2>Your Cart is Empty</h2>
        <p className='text-secondary'>
          Add Some Products to Your Cart to see them here
        </p>
        <Link to='/' className='inline-block bg-zinc-200 px-6 py-2 
        mt-6 rounded-lg hover:text-primary'>
          Continue Shopping
        </Link>
      </div>
    </div>
  }

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className='container'>
      <div className='flex justify-between items-center'>
        <h2 className='text-2xl font-bold mb-8'>Shopping Cart</h2>

        <button className='text-secondary hover:text-red-700'
          onClick={() => dispatch(
            clearCart()
        )}>
          <BrushCleaning />
        </button>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        <div className='lg:col-span-2 shadow-md p-4 rounded-md bg-card'>
          {cartItems.map((item) => {
            const imgPath = `../assets/${item.img}`;

            return (
              <div key={item.product_id}
                className='flex items-center gap-4 py-4 border-b'
              >
                <Link to={`/product/${item.product_id}`}>
                  <img src={imgPath} alt={item.product_name} 
                    className='w-24 h-24 object-cover rounded'
                  />
                </Link>

                <div className='flex-1'>
                  <Link to={`/product/${item.product_id}`}
                    className='font-semibold hover:text-primary'
                  >
                    {item.product_name}
                  </Link>
                  <p className='text-gray-600'>${item.price}</p>

                  <div className='flex items-center gap-2 mt-2'>
                    <button
                      onClick={() => dispatch(
                        updateQuantity({
                          id: item.product_id, 
                          quantity: Math.max(1, item.quantity - 1),
                        })
                      )}
                    >
                      <Minus className='nav-icon hover-button'/>
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => dispatch(
                        updateQuantity({
                          id: item.product_id, 
                          quantity: item.quantity + 1,
                        })
                      )}
                    >
                      <Plus className='nav-icon hover-button'/>
                    </button>

                    <div className='ml-4 cursor-pointer text-secondary hover:text-red-700'
                      onClick={() => dispatch(removeFromCart(item.product_id))}
                    >
                      <Trash />
                    </div>
                  </div>
                </div>

                <div className='text-right'>
                  <p className='font-bold'>
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div className='lg:col-span'>
          <div className='bg-white shadow-md p-4 rounded-md'>
            <h3 className='text-4xl font-bold mb-4'>Order Summary</h3>

            <div className='space-y-2 mb-4'>
              <div className='flex justify-between'>
                <span>Sub Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <div className='flex justify-between'>
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <div className='flex justify-between border-t pt-2 font-bold'>
                <span>Total </span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

              <Link to={'/checkout'}>
                <button className='w-full cursor-pointer bg-primary px-6 py-3 rounded-lg hover:bg-secondary duration-600 ease-in-out'>
                  Proceed to Checkout
                </button>
              </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage